import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import AlertHandler from "./components/layout/AlertHandler";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./context/github/Githubstate";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <AlertHandler />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
