import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

// sagas
import { connect } from "react-redux";

class ActiveExperience extends Component {
  render() {
    return (
      <div className="ActiveExperience">
        <div className="card shadow mb-4 ">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Active AR Experience
            </h6>
          </div>
          {this.props.activeMedia ? (
            <div className="text-center ">
              {(this.props.activeMedia.type === "image" ||
                this.props.activeMedia.type === "animatedImage") && (
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    src={this.props.activeMedia.url}
                    alt=""
                  />)}
              {this.props.activeMedia.type === "video" && (
                <div className="embed-responsive embed-responsive-4by3">
                  <video
                    className="embed-responsive-item px-3 px-sm-4 mt-3 mb-4"
                    src={this.props.activeMedia.url}
                    alt={this.props.activeMedia.name}
                  /></div>)}

            </div>
          ) : <div className="text-center px-3 px-sm-4 mt-3 mb-4"> </div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.reducer.campaigns,
    activeMedia: state.reducer.activeMediaObj
  };
};

export default connect(mapStateToProps)(ActiveExperience);
