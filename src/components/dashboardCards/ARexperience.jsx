import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

//images
import marker from "../../images/hiromarker.png";

class ARexperience extends Component {
  render() {
    return (
      <div className="ARexperience">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">AR Experience</h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
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
