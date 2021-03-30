import React, { useState } from 'react'
import "./account.css"
import Mobile from "../../Assets/iphone-ddd9e69.png"
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Logo from "../../Assets/spotify.png"
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
import LockIcon from '@material-ui/icons/Lock';

const Account = () => {
    const [name, setName] = useState("Sexy Debjit")
    const [email, setEmail] = useState("Sexy Email")
    const [nav, setNav] = useState('account')
    const [show, setShow] = useState(false)
    const [drop, setDrop] = useState(false)
    const [password, setPassword] = useState('Fuck you all')
    const [newPass, setNewPass] = useState('Fuck you all')

    document.addEventListener('mousedown', (e) => setDrop(false))

    return (
        <div className="account-container">

            <div className="navbar">
                <div className="container">
                    <div className="nav-items">
                        <Link to="/app" className="brand">
                            <div><img src={Logo} className="logo" /></div>
                        </Link>

                        <div className="profile-links"  id="dropdown" onClick={() => setDrop(!drop)}>
                            <Avatar src="https://avatars.githubusercontent.com/u/73888326?v=4" />
                            <div className="user-name" onBlur={() => setDrop(false)} >
                                <p>Debjit Pramanick</p>
                                <ArrowDropDownIcon />
                                <div className={`drop-down ${drop ? 'visible' : ''}`} >
                                    <ul>
                                        <li>Listen music</li>
                                        <li>Log out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="image-sec">
                    <img src={Mobile} alt="mobile" />
                    <div>
                        <h1>Music without<br />limits.</h1>
                        <Link to="/app" className="btn btn-primary listen-btn">Listen Music</Link>
                    </div>

                </div>

                <div className="account-sec">

                    <div className="nav-sidebar">
                        <div className="profile-pic" style={{ display: 'flex', justifyContent: 'center' }} >
                            <Avatar src="https://avatars.githubusercontent.com/u/73888326?v=4" style={{ width: '80px', height: '80px' }} />
                        </div>

                        <ul style={{ listStyleType: 'none' }}>
                            <li>
                                <p onClick={() => setNav('account')}
                                    className={(nav === 'account') ? 'cur' : ''}><HomeIcon /> Account</p>
                            </li>
                            <li>
                                <p onClick={() => setNav('edit')}
                                    className={(nav === 'edit') ? 'cur' : ''}><EditIcon /> Edit profile</p>
                            </li>
                            <li>
                                <p onClick={() => setNav('password')}
                                    className={(nav === 'password') ? 'cur' : ''}><LockIcon /> Change password</p>
                            </li>
                        </ul>
                    </div>

                    <div className="field">
                        {
                            (nav === 'account') ?
                                (
                                    <div className="account-overview">
                                        <h1>Account Overview</h1>

                                        <div className="overview">
                                            <h4>Profile</h4>
                                            <div className="row">
                                                <p>Username</p>
                                                <p style={{ textAlign: "left", width: "50%", color: 'black' }}>{name}</p>
                                            </div>
                                            <div className="row">
                                                <p>Email</p>
                                                <p style={{ textAlign: "left", width: "50%", color: 'black' }}>{email}</p>
                                            </div>
                                            <div className="row">
                                                <p>Joined</p>
                                                <p style={{ textAlign: "left", width: "50%", color: 'black' }}>Jan 25, 2021</p>
                                            </div>
                                            <button className="btn btn-primary edit-btn">Edit Profile</button>
                                            <div className="banner">
                                                <img src="https://www.sheerid.com/shoppers/wp-content/uploads/sites/4/2020/05/spotify-deal-page-467x316.jpg" alt="banner" />
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                (nav === 'edit') ?
                                    (
                                        <div className="edit-profile">
                                            <h1>Edit Profile</h1>

                                            <div className="overview">
                                                <h4>Profile</h4>
                                                <div className="row">
                                                    <p>Username</p>
                                                    <input value={name}
                                                        onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="row">
                                                    <p>Email</p>
                                                    <input value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="row">
                                                    <p>Joined</p>
                                                    <p style={{ textAlign: "left", width: "50%", color: 'black' }}>Jan 25, 2021</p>
                                                </div>
                                                <button className="btn btn-primary edit-btn">Update Profile</button>
                                                <div className="banner">
                                                    <img src="https://miro.medium.com/max/2625/1*c0FaLqy4tcO1uuYLP8AWBw.jpeg" alt="banner" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="change-password">
                                            <h1>Change Password</h1>

                                            <div className="overview">
                                                <div className="row">
                                                    <p>Old password</p>
                                                    <input value={password}
                                                        type={show ? '' : 'password'}
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="row">
                                                    <p>New password</p>
                                                    <input value={newPass}
                                                        type={show ? '' : 'password'}
                                                        onChange={(e) => setNewPass(e.target.value)} />
                                                </div>
                                                <div className="show-password">
                                                    <input type="checkbox" onClick={() => setShow(!show)} />
                                                    <p>Show password</p>
                                                </div>
                                                <button className="btn btn-primary edit-btn">Change Password</button>
                                                <div className="banner">
                                                    <img src="https://gulfbusiness.com/wp-content/uploads/2021/02/Spotify.jpeg" alt="banner" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account

