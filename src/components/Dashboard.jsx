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
import TextUpload1 from "./TextUpload1";

//actions
import { fetchCampaignData, logOut } from "../actions";
import { logout } from "../utils";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.admin) {
      this.props.redirectToLogin();
      return;
    }
    this.props.fetchCampaignData(this.props.admin);
  }
  
  handleLogout(e){
    e.preventDefault();
    logout();
    this.props.redirectToLogin();
  }

  render() {
    if ( !this.props.campaigns)
      return <h1>Loading: Campaigns}</h1>;
    else
      return (
        <div className="Dashboard">
          <div id="wrapper">
            <div>
            <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              <div
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
              >
                <div className="sidebar-brand-text mx-3">Solstice AR</div>
              </div>
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
            </div>

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
                        {this.props.admin?this.props.admin.name:""}
                      </a>
                    </li>
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item dropdown no-arrow">
                      <span
                        className="nav-link dropdown-toggle"
                        id="userDropdown"
                        onClick={(e)=>this.handleLogout(e)}
                      >
                        Logout
                      </span>
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
                    <TextUpload1/>
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
      dispatch(logOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
