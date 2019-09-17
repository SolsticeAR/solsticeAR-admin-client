import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

//images
import cclogo from "../../images/cclogo.jpeg";

// sagas
import { connect } from "react-redux";

class ActiveExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ActiveExperience">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Active AR Experience
            </h6>
          </div>

          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              src={this.props.activeMediaUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.reducer.campaigns,
    activeMediaUrl: state.reducer.activeMediaUrl
  };
};

export default connect(mapStateToProps)(ActiveExperience);
