
import React from 'react'
import Sidebar from '../SIDE_NAVBAR/Sidebar.js'
import HomeMain from './HomeMain';


export default function Home() {

    return (
        <div className="d-flex" style={{ width: '100%' }}>

            <div style={{ width: "17%" }}>
                <Sidebar className="" />     {/* SIDE NAVBAR  */}
            </div>

            <div style={{ width: "83%" }}>
                <HomeMain />
            </div>
        </div>
    )
}
