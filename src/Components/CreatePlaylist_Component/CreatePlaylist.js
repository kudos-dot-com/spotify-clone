
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import POPUP from './Popup.js';



const Playlist = () => {

    const [popupBTN, setpopupBTN] = useState(false); // initially false


    return (
        /* style={{ background: "#1B1B1B", margin: "auto", overflowX: 'hidden' }} */
        <div >
            <Container /* className="container_self" */>

                <h1>POPUP</h1>
                <button onClick={() => setpopupBTN(true)}> click</button>

                <POPUP trigger={popupBTN} setTrigger={setpopupBTN}>
                   
                </POPUP>

            </Container>
        </div>
    )
}

export default Playlist
