import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

// components
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/register/">Register</Link>
          </li>
          <li>
            <Link to="/dashboard/">Dashboard</Link>
          </li>
        </ul>

        <Route path="/login/" exact component={Login} />
        <Route path="/register/" exact component={Register} />
        <Route path="/dashboard/" exact component={Dashboard} />
      </div>
    );
  }
}

export default App;
