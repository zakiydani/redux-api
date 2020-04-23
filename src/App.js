import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Mock from "./Pages/Mock";
import Todo from "./Pages/Todo";
import Hooks from "./Pages/Hooks";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
          <Route path="/mock">
            <Mock />
          </Route>
          <Route path="/hooks">
            <Hooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
