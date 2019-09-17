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
          const media = {
            name: result.info.original_filename,
            type: result.info.resource_type,
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
        <li className="nav-item active">
          <a
            className="nav-link"
            href="#page-top"
            onClick={() => this.openWidget(this.widget)}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Upload New File</span>
          </a>
        </li>
        {/* <button
          id="upload_widget"
          className="cloudinary-button"
          onClick={() => this.openWidget(widget)}
        >
          Upload files
        </button> */}
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
