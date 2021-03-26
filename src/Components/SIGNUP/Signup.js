import React,{useState} from 'react'
import './Signup.css'
import TextField from '@material-ui/core/TextField';
import spotify from "../../images/spotify.png";
import google from "../../images/google.png";

function Signup() {
    const [email,set_email]=useState("");
    const [name,set_name]=useState("");
    const [password,set_password]=useState("");

    return (
        <div className="signup">
            <div className="signup_header">
                <img src={spotify}></img>
                <h2>Sign up for free to start listening.</h2>
                <button className="google"><img src={google}></img>SIGN UP WITH Google</button>
            </div>
            <hr/>
            <h2>Sign up with your email address</h2>
            <form className="signup_body">
                
                <h3>What's your name?</h3>
                <input placeholder="Enter your name" value={name} onChange={(e) =>  set_name(e.target.value)}></input>
                <h3>What's your email?</h3>
                <input placeholder="Enter your email" value={email} onChange={(e) => set_email(e.target.value)}></input>
                <h3>What's your password?</h3>
                <input placeholder="Enter your password" value={password} onChange={(e) => set_password(e.target.value)}></input>
                <button type="submit">Sign Up</button>
            </form>
            
        </div>
    )
}

export default Signup
