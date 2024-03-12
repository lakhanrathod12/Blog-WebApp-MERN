 const express = require('express');
 const cors = require('cors');
 const User = require('./models/User')
 const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs')
 const jwt= require('jsonwebtoken')
 const cookieParser = require('cookie-parser');
 const session = require('express-session');
 const multer = require('multer');
 const uploadMiddleware = multer({dest:'uploads/'})
 const Post = require('./models/Post');
 const fs = require('fs');

 const app =express();

 const salt = bcrypt.genSaltSync(10);
 const secret = 'asdfe45we45w345wegw345werjktjwertkj';

 app.use(cors({credentials:true, origin:'http://localhost:3000'}));
 app.use(express.json());
 app.use(cookieParser());
 app.use('/uploads', express.static(__dirname + '/uploads'));
 

// Use express-session middleware
app.use(
  session({
    secret: 'asdfe45we45w345wegw345werjktjwertkj',
    resave: true,
    saveUninitialized: true,
  })
);


 mongoose.connect('mongodb+srv://user:test123@cluster0.j5arrus.mongodb.net/?retryWrites=true&w=majority')
 

 app.post('/register', async (req,res) => {
    const {name,email,username,password} = req.body;
    try{
      const userDoc = await User.create({
        name,
        email,
        username,
        password:bcrypt.hashSync(password,salt),
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
  });

app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      const tokenPayload = {
        name: userDoc.name,
        username: userDoc.username,
        id: userDoc._id,
    };
    jwt.sign(tokenPayload, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
          name: userDoc.name,
          id: userDoc._id,
          username: userDoc.username,
      });
  });
    } else {
      res.status(400).json('wrong credentials');
    }
  });
  
  app.get('/profile', (req, res) => {
    const { token } = req.cookies;

    // Check if the token is not provided
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }

    // Verify the token
    jwt.verify(token, secret, (err, info) => {
        if(err) throw err;
        res.json(info);
        // console.log(info);
    });
});

app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});

app.post('/post',uploadMiddleware.single('file'),async(req,res)=>{
  const {originalname,path}=req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.'+ext;
  fs.renameSync(path,newPath);

  const {token} = req.cookies;
  jwt.verify(token,secret,{},async(err, info)=>{
    if(err) throw err;
    const {title,summary,content}=req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover:newPath,
      author:info.id,
    });
    res.json(postDoc);
  })
})

app.put('/post/:id',uploadMiddleware.single('file'),async(req,res)=>{
  let newPath = null;
  if(req.file){
    const {originalname, path}=req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
     newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  }

  const {token} = req.cookies;
  jwt.verify(token,secret, {},  async(err,info)=>{
    if (err) throw err;
    const id= req.params.id;
    const { title, summary, content} = req.body;
    const postDoc = await Post.findById(id);
    // console.log(postDoc);
    // console.log('postDoc id: '+ postDoc.author + ' info id: '+info.id); 
    const isAuthor = JSON.stringify(postDoc.author)===JSON.stringify(info.id);
    // console.log(isAuthor);
    if (!isAuthor){
      console.log('Author not found');
      return res.status(400).json('you are not the author');
    }
    await postDoc.updateOne({
      title,
      summary,
      content,
      cover:newPath ? newPath:postDoc.cover,
    })
    res.json(postDoc);
  })
})


app.put('/update/:id', uploadMiddleware.single('file'),async(req,res)=>{
  let newPath = null;
  if(req.file){
    const {originalname, path}=req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
     newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  }

  const {token} = req.cookies;
  jwt.verify(token,secret, {},  async(err,info)=>{
    if (err) throw err;
    const id= req.params.id;
    const {name, email, username, password} = req.body;
    const profDoc = await Post.findById(id);
    // console.log(postDoc);
    // console.log('postDoc id: '+ postDoc.author + ' info id: '+info.id); 
    const isAuthor = JSON.stringify(postDoc.author)===JSON.stringify(info.id);
    // console.log(isAuthor);
    if (!isAuthor){
      console.log('Author not found');
      return res.status(400).json('you are not the author');
    }
    await profDoc.updateOne({
      name,
      email,
      username,
      password,
      profile:newPath ? newPath:profDoc.cover,
    })
    console.log(profDoc);
    res.json(profDoc);
  })
})

app.get('/post', async (req, res) => {
  res.json(
    await Post.find()
      .populate('author', 'name')
      .sort({createdAt:-1})
      .limit(20)
  );
});

app.get('/post/:id', async(req,res)=>{
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author',['name']);
  // console.log(postDoc);
  res.json(postDoc);
})

app.listen(4000); 