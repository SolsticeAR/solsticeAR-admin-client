import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

// card components
import ViewCountGraph from "./dashboardCards/ViewCountGraph";
import ActiveExperience from "./dashboardCards/ActiveExperience";
import ExperiencesTable from "./dashboardCards/ExperiencesTable";
import CloudinaryUpload from "./CloudinaryUpload";
import TextUpload from "./TextUpload";

//actions
import { fetchCampaignData } from "../actions";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.admin) {
      this.props.redirectToLogin();
      return;
    }
    this.props.fetchCampaignData(this.props.admin);
  }
  getMediaUrl() {
    if (this.props.campaigns.length) {
      return this.props.campaigns[0].media[
        this.props.campaigns[0].activemediaId - 1
      ].url;
    }
  }

  render() {
    if (!this.props.campaigns[0])
      return <h1>Loading: {this.props.campaigns[0]}</h1>;
    else
      return (
        <div className="Dashboard">
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
                <a className="nav-link" href="#accordionSidebar">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard Home</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#experiences-table">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Your AR Experiences</span>
                </a>
              </li>
              <li className="nav-item active">
                <CloudinaryUpload />
              </li>
              <li className="nav-item active">
                <TextUpload />
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
                        {this.props.admin.name}
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
    admin: state.reducer.adminData,
    campaigns: state.reducer.campaigns
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCampaignData: admin => {
      dispatch(fetchCampaignData(admin.id));
    },
    redirectToLogin: () => {
      dispatch(push("/login"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
