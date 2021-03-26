
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Components/SEARCH/Search.js';
import Home from './Components/HOME/Home.js';
import Signup from './Components/SIGNUP/Signup';
import Login from './Components/LOGIN/Login'

function App() {


  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/search">
            < Search />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
