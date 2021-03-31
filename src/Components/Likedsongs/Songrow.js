import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./Songrow.css";

function Songrow({ id,title,artist,album,date,time,imageurl }) {
    return (
        <div className="songrow">
            <div className="songrow_title">
                <p>{id}</p>
                <img className="song_image" src={imageurl}></img>
                <div className="song_details">
                    <h3>{title}</h3>
                    <p>{artist}</p>
                </div>
            </div>
            <div className="songrow_album">
                <p>{album}</p>
            </div>
            <div className="songrow_date">
                <p>{date}</p>
            </div>
            <div className="songrow_time">
                <FavoriteIcon className="like"/>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default Songrow
