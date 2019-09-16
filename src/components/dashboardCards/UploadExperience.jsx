import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

class UploadExperience extends Component {
  render() {
    return (
      <div class="UploadExperience">
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
    );
  }
}

export default UploadExperience;
