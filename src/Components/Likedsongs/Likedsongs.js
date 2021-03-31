import React from 'react'
import "./Likedsongs.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Songrow from "./Songrow";

function Likedsongs() {
    return (
        <div className="likedsongs">
            <div className="likedsongs_header">
                <div className="likedsongs_header_top">
                <div className="likedsongs_header_left">
                    <FavoriteIcon className="header_left_icon"/>
                </div>
                <div className="likedsongs_header_right">
                    <p>PLAYLIST</p>
                    <h1>Liked Songs</h1>
                    <div className="profile_details">
                        <Avatar className="profile_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"/>
                        <h4>Diganta Ghosh</h4>
                        <p><span>.</span>12 songs</p>
                    </div>
                </div>

                </div>
                <div className="likedsongs_header_bottom">
                    <PlayCircleFilledIcon className="play"/>
                    <div className="header_bottom">
                        <p className="title"><span>#</span>TITLE</p>
                        <p>ALBUM</p>
                        <p>DATE ADDED</p>
                        <AccessTimeIcon className="time"/>
                    </div>
                    <hr />
                </div>
            <div className="likedsongs_body">
                <Songrow id="1" title="Tum Hi Ho" artist="Arijit Singh" album="Hindi Best Romantic Songs" date="4 seconds ago" time="3:59" imageurl="https://i.ytimg.com/vi/JWovdakW2JM/maxresdefault.jpg"/>
                <Songrow id="2" title="Agar Tum Sath Ho" artist="Dhincahk Pooja" album="Hindi Romantic Songs" date="5 minustes ago" time="4:67" imageurl="https://i.ytimg.com/vi/OX-h7MtkeOI/maxresdefault.jpg"/>
                <Songrow id="2" title="Agar Tum Sath Ho" artist="Dhincahk Pooja" album="Hindi Romantic Songs" date="5 minustes ago" time="4:67" imageurl="https://i.ytimg.com/vi/OX-h7MtkeOI/maxresdefault.jpg"/>
                <Songrow id="2" title="Agar Tum Sath Ho" artist="Dhincahk Pooja" album="Hindi Romantic Songs" date="5 minustes ago" time="4:67" imageurl="https://i.ytimg.com/vi/OX-h7MtkeOI/maxresdefault.jpg"/>
                <Songrow id="2" title="Agar Tum Sath Ho" artist="Dhincahk Pooja" album="Hindi Romantic Songs" date="5 minustes ago" time="4:67" imageurl="https://i.ytimg.com/vi/OX-h7MtkeOI/maxresdefault.jpg"/>
                <Songrow id="2" title="Agar Tum Sath Ho" artist="Dhincahk Pooja" album="Hindi Romantic Songs" date="5 minustes ago" time="4:67" imageurl="https://i.ytimg.com/vi/OX-h7MtkeOI/maxresdefault.jpg"/>
            </div>
            </div>
        </div>
    )
}

export default Likedsongs
