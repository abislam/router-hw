import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Box1 from "../box1/Box1";
import Box2 from "../box2/Box2";
import Box3 from "../box3/Box3";
function Home(){
    return(
        <Router>
            <div>
                <Link to="/box1"><div style={{backgroundColor: "red", height: 100, width: 100}}>Box1</div></Link>
                <Link to="/box2"><div style={{backgroundColor: "green", height: 100, width: 100}}>Box2</div></Link>
                <Link to="/box3"><div style={{backgroundColor: "blue", height: 100, width: 100}}>Box3</div></Link>
            </div>
        </Router>
    )
}

export default Home;

