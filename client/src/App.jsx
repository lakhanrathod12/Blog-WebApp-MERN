import logo from './logo.svg';
import './App.css';
import Post from './post';
import {Routes,Route} from "react-router-dom";
import Header from './Header';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import Editor from './Editor'
import EditPost from './pages/EditPost'
import EditProfile from './pages/EditProfile';
import DisplayProfile from './pages/DisplayProfile';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element ={<Layout/>}>
          <Route index element={<IndexPage/>}/> 
          <Route path={'/login'} element ={<LoginPage/>}/>  
          <Route path={'/register'} element ={<RegisterPage/>}/>  
          <Route path={'/create'} element={<CreatePost/>}  />
          <Route path={'/post/:id'} element={<PostPage/>} />
          <Route path={'/edit/:id'} element={<EditPost/>} />
          <Route path={'/update/:id'} element={<EditProfile/>} />
          <Route path={'/display/:id'} element={<DisplayProfile/>} />
        </Route>
      </Routes>
    </UserContextProvider>
    
    
  );
}

export default App;
