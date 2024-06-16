import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Scroll from "./Components/Scroll";
import ErrorBoundary from "./Components/ErrorBoundary";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import "./App.css";

const Navigation = () => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      <div className="tc mt3 pa2">
        <Link to="/">
          <button
            type="button"
            className="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2"
          >
            Home
          </button>
        </Link>
        <Link to="/create">
          <button
            type="button"
            className="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2"
          >
            Create New!
          </button>
        </Link>
        <Link to="/delete">
          <button
            type="button"
            className="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2"
          >
            Delete!
          </button>
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Navigation />

        <Scroll>
          <ErrorBoundary>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/create" exact element={<Create />}></Route>
              <Route path="/edit/:id" exact element={<Edit />} />
              <Route path="/delete" exact element={<Delete />}></Route>
            </Routes>
          </ErrorBoundary>
        </Scroll>
      </div>
    </Router>
  );
};

export default App;
