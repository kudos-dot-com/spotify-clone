
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomeMain from "../../Components/HomeComponent/HomeMain";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchMainbar from "../../Components/SearchComponent/SearchMainbar";
import Player from "../../Components/Player/Player.js";
import CreatePlaylist_Main from "../../Components/CreatePlaylist_Component/CreatePlaylist.js";



export default function Home() {


    return (

        <div>
            <div style={{ zIndex: "1", position: "absolute", width: "100%" }}>
                <div className="d-flex">
                    <Router>
                        {/* do not remove this section */}
                        <div style={{ width: "20%" }}>
                            <Sidebar />
                        </div>

                        <Switch>
                            <Route path="/app" exact>
                                <div style={{ width: "80%" }}>
                                    <HomeMain />
                                </div>
                            </Route>

                            <Route path="/app/search">
                                <div style={{ width: "80%" }}>
                                    <SearchMainbar />
                                </div>
                            </Route>

                            <Route path="/app/createplaylist">
                                <div style={{ width: "80%" }}>
                                    <CreatePlaylist_Main />
                                </div>
                            </Route>

                        </Switch>
                    </Router>
                </div>
            </div>

            {/* player */}
            <div
                style={{ zIndex: "2", width: "100%", position: "fixed", bottom: "0" }}>
                <Player />
            </div>
        </div>
    );
}
