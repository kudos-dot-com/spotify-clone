import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomeMain from '../../Components/HomeComponent/HomeMain';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchMainbar from '../../Components/SearchComponent/SearchMainbar';

export default function Home() {
    return (
        <div className="d-flex">

            <Router>
                {/* do not remove this section */}
                <div style={{ width: "15%" }}>
                    <Sidebar className="" />
                </div>


                <Switch>
                    <Route path="/app" exact>
                        <div style={{ width: "85%" }}>
                            <HomeMain />
                        </div>
                    </Route>

                    <Route path="/app/search">
                        <div style={{ width: "85%" }}>
                            <SearchMainbar />
                        </div>
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}
