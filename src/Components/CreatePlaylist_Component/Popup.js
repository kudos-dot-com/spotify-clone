
import React from 'react';
import "./popup.css";

const Popup = (props) => {

    return (
        (props.trigger) ?
            (<div className="popup" >
                <div className="popup-inner">
                    {props.children}  {/*  elements of the prev files are inserted here. */}
                    <h5 className="popup_head">Create Playlist</h5>

                    <div id="center" >
                        <form className="popup_form" >
                            <label for="name" id="name" > <b>PLAYLIST NAME : {"  "} </b></label>
                            <input type="text" id="input" name="user_name" placeholder="playlist" />
                        </form>

                        <form className="popup_form" >
                            <label for="name" id="name" > <b>DATE ADDED : {"  "}</b> </label>
                            <input type="text" id="input" />
                        </form>
                    </div>

                    <div class="d-flex justify-content-around" style={{ paddingTop: "15px" }} >
                        <div>
                            <button
                                type="button"
                                class="btn btn-danger close-btn"
                                onClick={() => props.setTrigger(false)}>
                                Cancel
                            </button>
                        </div>


                        <div>
                            <button
                                type="button"
                                class="btn btn-success close-btn"
                                onClick={() => props.setTrigger(false)}>
                                Create
                            </button>
                        </div>

                    </div>




                </div>
            </div>)
            : " "
    )
}

export default Popup;
