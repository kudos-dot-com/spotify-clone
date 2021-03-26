
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Components/SEARCH/Search.js';
import Home from './Components/HOME/Home.js';


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
        </Switch>
      </Router>
    </>
  );
}

export default App;
