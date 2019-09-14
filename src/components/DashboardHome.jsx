import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

// images
import cclogo from "../images/cclogo.jpeg";
import marker from "../images/hiromarker.png";

class DashboardHome extends Component {
  render() {
    return (
      <div>
        <body id="page-top">
          <div id="wrapper">
            <ul
              class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              <a
                class="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
              >
                <div class="sidebar-brand-icon rotate-n-15"></div>
                <div class="sidebar-brand-text mx-3">Solstice AR</div>
              </a>

              <hr class="sidebar-divider my-0" />

              <li class="nav-item active">
                <a class="nav-link" href="index.html">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>

            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <button
                    id="sidebarToggleTop"
                    class="btn btn-link d-md-none rounded-circle mr-3"
                  >
                    <i class="fa fa-bars"></i>
                  </button>

                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown no-arrow">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#page-top"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                          [User Name Here]
                        </span>
                      </a>
                    </li>
                    <div class="topbar-divider d-none d-sm-block"></div>
                    <li class="nav-item dropdown no-arrow">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#page-top"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                          Logout
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>

                <div class="container-fluid">
                  <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                  </div>

                  <div class="row">
                    <div class="col-xl-8 col-lg-7">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 class="m-0 font-weight-bold text-primary">
                            AR Experience View Count
                          </h6>
                        </div>

                        <div class="card-body">
                          <div class="chart-area">
                            <canvas id="myAreaChart"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-4 col-lg-5">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 class="m-0 font-weight-bold text-primary">
                            Active AR Experience
                          </h6>
                        </div>

                        <div class="text-center">
                          <img
                            class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={cclogo}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

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

                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Your AR Experiences
                      </h6>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table
                          class="table table-bordered"
                          id="dataTable"
                          width="100%"
                          cellspacing="0"
                        >
                          <thead>
                            <tr>
                              <th>AR Experience Name</th>
                              <th>AR Type (video, img..)</th>
                              <th>Date Created</th>
                              <th>View Count</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tiger Nixon</td>
                              <td>Video</td>
                              <td>2011/01/26</td>
                              <td>61</td>
                            </tr>
                            <tr>
                              <td>Garrett Winters</td>
                              <td>Video</td>
                              <td>2013/07/01</td>
                              <td>63</td>
                            </tr>
                            <tr>
                              <td>Ashton Cox</td>
                              <td>Video</td>
                              <td>2015/01/01</td>
                              <td>66</td>
                            </tr>
                            <tr>
                              <td>Cedric Kelly</td>
                              <td>Image</td>
                              <td>2011/09/01</td>
                              <td>22</td>
                            </tr>
                            <tr>
                              <td>Airi Satou</td>
                              <td>Image</td>
                              <td>2011/01/01</td>
                              <td>13</td>
                            </tr>
                            <tr>
                              <td>Brielle Williamson</td>
                              <td>Text</td>
                              <td>2010/01/25</td>
                              <td>5</td>
                            </tr>
                            <tr>
                              <td>Herrod Chandler</td>
                              <td>Text</td>
                              <td>2011/07/25</td>
                              <td>2011</td>
                            </tr>
                            <tr>
                              <td>Rhona Davidson</td>
                              <td>Text</td>
                              <td>2012/01/25</td>
                              <td>55</td>
                            </tr>
                            <tr>
                              <td>Colleen Hurst</td>
                              <td>Image</td>
                              <td>2011/01/23</td>
                              <td>39</td>
                            </tr>
                            <tr>
                              <td>Shad Decker</td>
                              <td>Image</td>
                              <td>2011/01/25</td>
                              <td>51</td>
                            </tr>
                            <tr>
                              <td>Michael Bruce</td>
                              <td>Text</td>
                              <td>2011/01/25</td>
                              <td>29</td>
                            </tr>
                            <tr>
                              <td>Donna Snider</td>
                              <td>Image</td>
                              <td>2011/12/10</td>
                              <td>27</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                  <div class="copyright text-center my-auto">
                    <span>Solstice AR &copy; 2019</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
          </a>

          <div
            class="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    class="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div class="modal-footer">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a class="btn btn-primary" href="login.html">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default DashboardHome;
