import React from 'react'
import "./launcher.css"
import {Link} from 'react-router-dom'

const Launcher = () => {
    return (
        <div className="main-container">
            <div className="overlay">
                <div className="launch-container">
                    <h1>welcome to<br />spotify clone.</h1>
                    <Link to="/app" ><button>Launch Webplayer</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Launcher
