import React,{useState} from 'react'
import './Login.css'
import spotify from "../../../Assets/spotify.png";
import google from "../../../Assets/google.png";

function Login() {
    const [email,set_email]=useState("");
    const [password,set_password]=useState("");

    return (
        <div className="login">
            <img id="img" src={spotify}></img>
            <hr/>
            <div className="login_header">
                <h2>To continue, log in to Spotify.</h2>
                <button className="google"><img id="img" src={google}></img>CONTINUE WITH Google</button>
            </div>
            <h4>OR</h4>
            <form className="login_body">
                <h3>Email address or username</h3>
                <input placeholder="Enter your email" value={email} onChange={(e) => set_email(e.target.value)}></input>
                <h3>Password</h3>
                <input placeholder="Enter your password" value={password} onChange={(e) => set_password(e.target.value)}></input>
                <button type="submit">LOG IN</button>
            </form>
            <hr className="hr_below"/>
            <div className="login_bottom">
                <h3>Don't have an account?</h3>
                <button>SIGN UP FOR SPOTIFY</button>
            </div>
        </div>
    )
}

export default Login
