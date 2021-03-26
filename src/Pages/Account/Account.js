import React from 'react'
import "./account.css"
import Mobile from "../../Assets/iphone-ddd9e69.png"
import img from '../../Assets/download.png'
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Account = () => {
    return (
        <div className="account-container">

            <div className="navbar">
                <div className="container">
                    <div className="nav-items">
                        <Link to="/app" className="brand">
                            <div><img src={img} className="logo"/></div>
                            <div><h3 className="text-center logo-text" style={{ color: "#ccc" }}>Spotify</h3></div>
                        </Link>

                        <div className="profile-links">
                            <Avatar src="https://avatars.githubusercontent.com/u/73888326?v=4"/>
                            <div className="user-name">
                                <p>Debjit Pramanick</p>
                                <ArrowDropDownIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="image-sec">
                    <img src={Mobile} alt="mobile" />
                    <h1>Music without<br />limits.</h1>
                </div>

                <div className="acccount-sec">
                    Debjit Pramanick
                </div>
            </div>
        </div>
    )
}

export default Account
