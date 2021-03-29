import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import StorageIcon from "@material-ui/icons/Storage";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import img from "../../Assets/download.png";
import "../../App.css";

export default function Sidebar() {


    return (

        <div style={{ background: "#141414", height: "100vh", cursor: "pointer", position: "fixed", width: "20%", }}>
            <br></br>
            <div className="d-flex justify-content-flex-start px-2">
                <div>
                    <img src={img} height="50" width="60" className="logo" />
                </div>
                <div>
                    <h3
                        className="text-center"
                        style={{ color: "#ccc", marginTop: "8px" }}>
                        Spotify
                     </h3>
                </div>
            </div>
            <br></br>


            <ul style={{ listStyle: "none", textTransform: "capitalize", fontSize: "16px", color: "#fff", }}>
                <Link to="/app" className="icons">
                    <HomeIcon className="insideicon" />   Home
                </Link>

                <Link to="/app/search" className="icons">
                    <SearchIcon className="insideicon" /> search
                 </Link>

                <Link to="/app/playlist" className="icons">
                    <StorageIcon className="insideicon" /> playlist
                 </Link>

                <br></br>
                <Divider style={{
                    margin: "0px 30px",
                    background: "#fff",
                    opacity: "0.5",
                    width: "70%",
                    height: "1px",
                }}

                />

                <br></br>

                <Link to="/app/createplaylist" className="icons">{" "}
                    <LibraryAddIcon className="insideicon" />  create playlist
                 </Link>

                <li className="icons">
                    <FavoriteIcon className="insideicon" /> liked songs
            </li>
            </ul>
        </div>
    );
}
