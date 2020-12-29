import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";

import Home from "./views/Home";
import Portfolio from "./views/Portfolio";


const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path= {"/projects"} component={Portfolio} />
            </Switch>
        </Router>
    );
};

export default App;
