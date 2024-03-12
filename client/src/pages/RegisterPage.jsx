import {useState} from "react";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName]=useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function register(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register',{
        method:'POST',
        body:JSON.stringify({name,username,password}),
        headers:{'Content-Type':'application/json'},
      });
    if(response.status === 200){
      alert('registration successfull');
      setRedirect(true);
    }else{
      alert('registration failed');
    }
  }
  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={ev=>setName(ev.target.value)}
      />
      <input type="email"
          placeholder="Email"
          required
          value={email}
          onChange={ev=>setEmail(ev.target.value)}
      />
      <input type="text"
             placeholder="username"
              value={username}
              onChange={ev => setUsername(ev.target.value)}
            />
      <input type="password"
             placeholder="password"
              value={password}
              onChange={ev=>setPassword(ev.target.value)}
             />
      <button className="sign">Register</button>
    </form>
  );
}