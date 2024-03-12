import {Link, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";
import './assets/CSS/Profile.css'
import icon from "./assets/images/Icon.png"
export default function Header() {
  const {id} = useParams();
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        // console.log(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;  
  const name=userInfo?.name;


  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav className="">
        {username && (
          <>
            
            {/* <a onClick={logout} >Logout ({name})</a> */}
            <nav className="navbar navbar-expand-sm">
             <Link to="/create" className="new-post">Create new post</Link>
              <div className="collapse navbar-collapse" id="navbar-list-4">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src={icon} width={50} height={50} className="rounded-circle" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link to={`/update/${id}`} className="dropdown-item" >Edit Profile</Link>
                      <Link to={`/display/${id}`} className="dropdown-item" >Profile</Link>
                      <a className="dropdown-item" onClick={logout}>Logout</a>
                    </div>
                  </li>   
                </ul>
              </div>
            </nav>

            </>
        )}
        {!username && (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
              
          </>
          
        )}
      </nav>
    </header>
  );
}