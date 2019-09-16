import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

// card components
import ViewCountGraph from "./dashboardCards/ViewCountGraph";
import ActiveExperience from "./dashboardCards/ActiveExperience";
import ARexperience from "./dashboardCards/ARexperience";
import UploadExperience from "./dashboardCards/UploadExperience";
import ExperiencesTable from "./dashboardCards/ExperiencesTable";

class DashboardHome extends Component {
  render() {
    return (
      <div class="DashboardHome">
        <div id="wrapper">
          <ul
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              class="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div class="sidebar-brand-text mx-3">Solstice AR</div>
            </a>
            <hr class="sidebar-divider my-0" />
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard Home</span>
              </a>

            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Your AR Experiences</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Add / Create New AR Experience</span>
              </a>
            </li>
          </ul>

          <div id="content-wrapper" class="d-flex flex-column">
            {/* PAGE CONTENT */}
            <div id="content">
              {/* NAVBAR */}
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown no-arrow">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                    >
                      User Name Here
                    </a>
                  </li>
                  <div class="topbar-divider d-none d-sm-block"></div>
                  <li class="nav-item dropdown no-arrow">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
              {/* CARDS */}
              <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div class="row">
                  <div class="col-xl-8 col-lg-7">
                    <ViewCountGraph />

                  </div>
                  <div class="col-xl-4 col-lg-5">
                    <ActiveExperience />
                  </div>
                  

                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4">
                    <ARexperience />


                  <div class="row">
                    <div class="col-lg-6 mb-4">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3">
                          <h6 class="m-0 font-weight-bold text-primary">
                            AR Experience
                          </h6>
                        </div>
                        <div class="card-body">
                          <div class="text-center">
                            <img
                              class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                              src={marker}
                              alt=""
                            />
                          </div>
                          <p>
                            Put the experience URL{" "}
                            <a
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              href="https://tinyurl.com/y8asa9cq"
                            >
                              HERE
                            </a>
                          </p>
                          <p>Share your AR Experience</p>
                          <a href="#page-top" class="btn btn-primary btn-circle btn-lg">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="#page-top" class="btn btn-primary btn-circle btn-lg">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 mb-4">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3">
                          <h6 class="m-0 font-weight-bold text-primary">
                            Upload New AR Experience
                          </h6>
                        </div>
                        <div class="card-body">
                          <form class="md-form">
                            <div class="file-field">
                              <div class="z-depth-1-half mb-4">
                                <img
                                  src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                                  class="img-fluid"
                                  alt="example placeholder"
                                />
                              </div>
                              <div class="d-flex justify-content-center">
                                <div class="btn btn-mdb-color btn-rounded float-left">
                                  <span>Choose file</span>
                                  <input type="file" />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="col-lg-6 mb-4">
                    <UploadExperience />
                  </div>
                </div>
                <ExperiencesTable />
              </div>
            </div>

            {/* FOOTER */}
            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
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

export default DashboardHome;
