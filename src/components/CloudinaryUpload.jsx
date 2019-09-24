import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewMedia } from "../actions/index";

class CloudinaryUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudName: "dhmztfup0",
      uploadPreset: "cr4n1tkw"
    };
    this.widget = window.cloudinary.createUploadWidget(
      {
        cloudName: this.state.cloudName,
        uploadPreset: this.state.uploadPreset
      },
      (error, result) => {
        if (result.event === "success") {
          let type = result.info.resource_type
          if (type === "image" && result.info.format === "gif") {
            type = "animatedImage";
          }
          const media = {
            name: result.info.original_filename,
            type,
            url: result.info.url,
            campaignId: this.props.campaigns[0].id
          };
          this.props.addNewMedia(media);
        }
      }
    );
  }

  openWidget = widget => {
    widget.open();
  };

  checkResult = result => {
    if (result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
    }
  };

  render() {
    return (
      <div className="app">
        <a
          className="nav-link"
          href="#page-top"
          onClick={() => this.openWidget(this.widget)}
        >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Upload Media to Gallery</span>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.reducer.campaigns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewMedia: media => {
      dispatch(createNewMedia(media));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CloudinaryUpload);
