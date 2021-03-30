
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import POPUP from './Popup.js';



const Playlist = () => {

    const [popupBTN, setpopupBTN] = useState(true); // initially false


    return (
        <div style={{ background: "#1B1B1B", margin: "auto", overflowX: 'hidden' }}>
            <Container className="container_self">

                <h2 className="home_head">POPUP</h2>
                {/* <button onClick={() => setpopupBTN(true)}> click</button> */}

                <POPUP trigger={popupBTN} setTrigger={setpopupBTN}>

                </POPUP>

            </Container>
        </div>
    )
}

export default Playlist
