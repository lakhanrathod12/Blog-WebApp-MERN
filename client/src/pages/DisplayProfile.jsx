import { useState, useEffect } from "react";
import '../assets/CSS/UserProfile.css'
import icon from '../assets/images/user.png'
export default function DisplayProfile(){
    const [info,setInfo] = useState([]);
    return (
    <div className="container">
        <div className="profile">
            <img src={icon} alt="P" className="icon" />
            <div className="user">
            <h2 className="name" >Lakhan Rathod</h2>
            <a className="username">lakhanrathod12</a>
            <p>Web Designer</p>
            </div>
        </div>
            <div className="profile-info">
                <h6 className="">Information</h6>
                <hr />
                <div className="contact">
                    <h4 className="email">
                            <p className="">Email</p>
                            <h6 className="text-muted ">lakhanrajeshtrathod@gmail.com</h6>
                    </h4>
                    <h4 className="phone">
                            <p className="">Phone</p>
                            <h6 className="text-muted">98979989898</h6>
                    </h4>
                </div>               
                
            </div>
    </div>
   )
}