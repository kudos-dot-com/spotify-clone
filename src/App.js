import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from './Pages/Account/Account';
import Launcher from './Pages/Launcher/Launcher';
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import HomeMain from './Components/HomeComponent/HomeMain';
import SearchMainbar from './Components/SearchComponent/SearchMainbar';
import CreatePlaylist from './Components/CreatePlaylist_Component/CreatePlaylist.js';
import Sidebar from './Components/Sidebar/Sidebar';
import Top_HorizontalBar from './Components/Sidebar/Top_Horizontal_bar.js';
import Player from './Components/Player/Player'

function App() {

  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/"><Launcher /></Route>

          {/* FOR HOME PAGE  */}
          <Route path="/app" exact>
            <div style={{ width: "100%" }}>
              <div style={{ zIndex: '0' }}>
                <div style={{ width: "20%" }}>
                  <Sidebar />
                </div>

                <div style={{ width: "80%", marginLeft: '20%' }}>
                  <Top_HorizontalBar />
                  <HomeMain />
                </div>

              </div>
              <div style={{ position: 'fixed', width: '100%', zIndex: '1', bottom: '0' }}>
                <Player />
              </div>
            </div>
          </Route>


          {/* FOR SEARCH PAGE  */}
          <Route path="/app/search">
            <div style={{ width: "100%" }}>
              <div style={{ zIndex: '0' }}>
                <div style={{ width: "20%" }}>
                  <Sidebar />
                </div>

                <div style={{ width: "80%", marginLeft: '20%' }}>
                  <Top_HorizontalBar />
                  <SearchMainbar />
                </div>
              </div>
              <div style={{ position: 'fixed', width: '100%', zIndex: '1', bottom: '0' }}>
                <Player />
              </div>
            </div>
          </Route>


          {/* FOR CREATEPLAYLIST PAGE  */}
          <Route path="/app/createplaylist">
            <div style={{ width: "100%" }}>
              <div style={{ zIndex: '0' }}>
                <div style={{ width: "20%" }}>
                  <Sidebar />
                </div>

                <div style={{ width: "80%", marginLeft: '20%' }}>
                  <Top_HorizontalBar />
                  <CreatePlaylist />
                </div>

              </div>
              <div style={{ position: 'fixed', width: '100%', zIndex: '1', bottom: '0' }}>
                <Player />
              </div>
            </div>
          </Route>


          <Route exact path="/account"><Account /></Route>
          <Route path="/signup">< Signup /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
