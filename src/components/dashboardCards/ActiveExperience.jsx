import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

//images
import cclogo from "../../images/cclogo.jpeg";

class ActiveExperience extends Component {
  render() {
    return (
      <div class="ActiveExperience">
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">
              Active AR Experience
            </h6>
          </div>

          <div class="text-center">
            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={cclogo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveExperience;
