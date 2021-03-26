import React from 'react'
import Search from './SearchSidebar'
import HomeMain from './HomeMain';
export default function Home() {
    return (
        <div className="d-flex" style={{width:'100%'}}>
           {/* do not remove this section */}
           <div style={{width:"20%"}}>
            <Search className=""/>
            </div>
            {/* do not remove this section */}

            {/*edit this section */}
            
            <div style={{width:"80%"}}>
           <HomeMain /> 
            </div>
        </div>
    )
}
