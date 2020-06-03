import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import AlertHandler from "./components/layout/AlertHandler";
import About from "./components/pages/About";
import User from "./components/users/User";
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
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
