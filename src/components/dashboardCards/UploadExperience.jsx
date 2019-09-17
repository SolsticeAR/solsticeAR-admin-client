import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

class UploadExperience extends Component {
  render() {
    return (
      <div className="UploadExperience">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Upload New AR Experience
            </h6>
          </div>
          <div className="card-body">
            <form className="md-form">
              <div className="file-field">
                <div className="z-depth-1-half mb-4">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                    className="img-fluid"
                    alt="example placeholder"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="btn btn-mdb-color btn-rounded float-left">
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
