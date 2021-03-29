
import React from 'react';
import "./popup.css";

const Popup = (props) => {

    return (
        (props.trigger) ?
            (<div className="popup" >
                <div className="popup-inner">
                    {props.children}  {/*  elements of the prev files are inserted here. */}
                    <h5 className="popup_head">Create Playlist</h5>
                    <div>
                        <form className="popup_form" >
                            <label for="name" id="name" >Playlist Name : {"  "} </label>
                            <input type="text" id="playlist" name="user_name" />
                        </form>
                    </div>
                    <button className="close-btn" onClick={() => props.setTrigger(false)} >Close</button>
                </div>
            </div>)
            : " "
    )
}

export default Popup;
