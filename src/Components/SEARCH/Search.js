
import React from 'react'
import Sidebar from '../SIDE_NAVBAR/Sidebar.js'
import SearchMain from './SearchMain.js';

export default function search() {

    return (
        <div className="d-flex" style={{ width: '100%' }}>

            <div style={{ width: "17%" }}>
                <Sidebar className="" />
            </div>

            <div style={{ width: "83%" }}>
                <SearchMain />
            </div>
        </div>
    )
}
