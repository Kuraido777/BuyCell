import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Buy from "./Buy/Buy";
import Sell from "./Sell/Sell";
import Contact from "./Contact/Contact";
import NoMatch from "./NoMatch/NoMatch";
import NavBar from "./components/NavBar";

/* It's better to handle states in one page, in order to handle states,
we need to use Component */

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/buy" component={Buy} />
            <Route exact path="/sell" component={Sell} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
