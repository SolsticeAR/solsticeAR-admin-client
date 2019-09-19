import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";

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
        <Route path="/" exact component={Dashboard} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    redirectToDashboard: adminData => {
      dispatch(push("/"));
    }
  }
};

export default connect(
  null,
  mapDispatchToProps
)(App);
