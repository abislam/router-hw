import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./components/home/Home";


function App() {
  return (
      <Router>
        <div className="App">

          <nav>

          </nav>
          <Switch>
            <Route exact path={"/"} component={Home}/>
          </Switch>

        </div>
      </Router>
  );
}

export default App;
