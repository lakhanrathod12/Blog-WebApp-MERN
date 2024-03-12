// import { useState, useEffect } from 'react';
// import { Navigate,useParams } from 'react-router-dom';
import '../assets/CSS/Profile.css'

export default function EditProfile(){
    // const {id} = useParams();
    // const [name, setName]=useState('');
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [files, setFiles] = useState('');
    // const [redirect,setRedirect] = useState(false);
    // useEffect(()=>{
    //     fetch('http://localhost:4000/update/'+id)
    //     .then(response =>{
    //         response.json().then(profInfo =>{
    //             setName(profInfo.name);
    //             setUsername(profInfo.username);
    //             setEmail(profInfo.email);
    //             setPassword(profInfo.password);
    //         });
    //     });
    // },[]);
    // async function updateProf(ev){
    //     ev.preventDefault();
    //     const data  = new FormData();
    //     data.set('name',name);
    //     data.set('username',username);
    //     data.set('email',email);
    //     data.set('password',password);
    //     data.set('id',id);
    //     if(files?.[0]){
    //         data.set('file',files?.[0]);
    //     }
    //     const response = await fetch('http://localhost:4000/update/'+id,{
    //         method:'PUT',
    //         body:data,
    //         credentials:'include',
    //     });
    //     if(response.ok){
    //         setRedirect(true);
    //     }
    // }

    // if(redirect){
    //     return <Navigate to={'/'} />
    // }

    return (
        <form className="update" >
            <h1>Update Profile</h1>
            <label htmlFor=""> Profile Picture
            <input type="file" 
                // onChange={ev =>setFiles(ev.target.files)}
            />
            </label>
            <input type="text"
                placeholder="Update Name"
                //   value={name}
                //   onChange={ev=>setName(ev.target.value)}
            />
            <input type="email"
                placeholder="Update Email"

                //   value={email}
                //   onChange={ev=>setEmail(ev.target.value)}
            />
            <input type="text"
                    placeholder="username"
                    //   value={username}
                    //   onChange={ev => setUsername(ev.target.value)}
                    />
            <input type="password"
                    placeholder="password"
                    //   value={password}
                    //   onChange={ev=>setPassword(ev.target.value)}
                    />
            <button className="cancel">Cancel</button>
            <button className="sign">Update</button>
            
        </form>
    );
}