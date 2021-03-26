import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'
import StorageIcon from '@material-ui/icons/Storage';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';
import {Link }  from "react-router-dom";
import './App.css'
export default function SearchSidebar() {
    return (
        <div style={{background:"#141414",height:"100vh",cursor:'pointer',position:'fixed',width:'20%'}}>
            <h3 className="text-center" style={{color:"#ccc"}}>Spotify</h3>
            <br></br><br></br>
            <ul className="" style={{listStyle:"none",textTransform:"capitalize",fontSize:"16px",color:"#fff"}}>
                <Link to="/" className="icons"><HomeIcon className="insideicon"/>Home</Link>
                <Link to="/search" className="icons"><SearchIcon className="insideicon"/> search</Link>
                <li className="icons"><StorageIcon className="insideicon"/>playlist</li>
                <br></br>
                <Divider style={{margin:"0px 30px",background:"#fff",opacity:"0.7"}}/>
                
                <br></br>
                <li className="icons"> <LibraryAddIcon className="insideicon"/>create playlist</li>
                <li className="icons">< FavoriteIcon className="insideicon"/> liked songs</li>
            </ul>
        </div>
    )
}
