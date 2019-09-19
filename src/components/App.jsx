import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// components
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login/" exact component={Login} />
        <Route path="/register/" exact component={Register} />
        <Route path="/dashboard/" exact component={Dashboard} />
      </div>
    );
  }
}

export default App;
