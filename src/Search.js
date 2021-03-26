import React from 'react'
import Search from './SearchSidebar'
import SearchMain from './SearchMainbar';
export default function search() {
    return (
        <div className="d-flex" style={{width:'100%'}}>
           
           <div style={{width:"20%"}}>
            <Search className=""/>
            </div>

            <div style={{width:"80%"}}>
            <SearchMain/>
            </div>
        </div>
    )
}
