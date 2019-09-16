import React, { Component } from "react";
import { fetchCampaignData } from "../actions";
import { connect } from "react-redux";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

// card components
import ViewCountGraph from "./dashboardCards/ViewCountGraph";
import ActiveExperience from "./dashboardCards/ActiveExperience";
import ARexperience from "./dashboardCards/ARexperience";
import UploadExperience from "./dashboardCards/UploadExperience";
import ExperiencesTable from "./dashboardCards/ExperiencesTable";
import CloudinaryUpload from "./CloudinaryUpload";

class DashboardHome extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCampaignData(this.props.admin);
  }
  render() {
    return (
      <div className="DashboardHome">
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-text mx-3">Solstice AR</div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
              <a className="nav-link" href="#page-top">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard Home</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#page-top">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Your AR Experiences</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#page-top">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Add / Create New AR Experience</span>
              </a>
            </li>
            <li className="nav-item active">
              <CloudinaryUpload />
            </li>
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            {/* PAGE CONTENT */}
            <div id="content">
              {/* NAVBAR */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#page-top"
                      id="userDropdown"
                    >
                      User Name Here
                    </a>
                  </li>
                  <div className="topbar-divider d-none d-sm-block"></div>
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#page-top"
                      id="userDropdown"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
              {/* CARDS */}
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                  <div className="col-xl-8 col-lg-7">
                    <ViewCountGraph />
                  </div>
                  <div className="col-xl-4 col-lg-5">
                    <ActiveExperience />
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-lg-6 mb-4">
                    <ARexperience />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <UploadExperience />
                  </div>
                </div> */}
                <ExperiencesTable />
              </div>
            </div>

            {/* FOOTER */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Solstice AR &copy; 2019</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    admin: state.reducer.adminData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCampaignData: admin => {
      console.log(admin);
      dispatch(fetchCampaignData(admin.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHome);
