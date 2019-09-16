import React, { Component } from "react";

// components
import DashboardHome from "./DashboardHome";
import CloudinaryUpload from "./CloudinaryUpload";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <DashboardHome />
      </div>
    );
  }
}

export default Dashboard;
