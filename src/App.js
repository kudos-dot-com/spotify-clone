import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Account from './Pages/Account/Account';
import Launcher from './Pages/Launcher/Launcher';
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import Playlist from "./Pages/Auth/Login/Login";

function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"><Launcher /></Route>
          <Route exact path="/app"><Home /></Route>
          <Route exact path="/account"><Account /></Route>
          <Route path="/signup">< Signup /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
