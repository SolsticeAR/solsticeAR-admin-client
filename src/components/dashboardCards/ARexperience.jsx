import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

//images
import marker from "../../images/hiromarker.png";

class ARexperience extends Component {
  render() {
    return (
      <div class="ARexperience">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">AR Experience</h6>
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
              <a rel="nofollow" href="https://tinyurl.com/y8asa9cq">
                HERE
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ARexperience;
