import React, { Component } from "react";
// const cloudinary = require("https://widget.cloudinary.com/v2.0/global/all.js");

class CloudinaryUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudName: "dhmztfup0",
      uploadPreset: "cr4n1tkw"
    };
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
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: this.state.cloudName,
        uploadPreset: this.state.uploadPreset
      },
      (error, result) => {
        this.checkResult(result);
      }
    );
    return (
      <div className="app">
        <button
          id="upload_widget"
          className="cloudinary-button"
          onClick={() => this.openWidget(widget)}
        >
          Upload files
        </button>
      </div>
    );
  }
}

export default CloudinaryUpload;
