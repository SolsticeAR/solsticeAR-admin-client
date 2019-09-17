import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewMedia } from "../actions/index";

class TextUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: ""
    };
  }
  handleClick(e) {
    e.preventDefault();
    const media = {
      name: this.state.upload,
      url: "",
      type: "text",
      campaignId: 1 // Set to default 1st campaign
    };
    this.props.createNewMedia(media);
  }
  render() {
    return (
      <a className="nav-link" href="#home">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Upload Text</span>
        <input
          type="text"
          className="form-control form-control-user"
          id="textUpload"
          placeholder="Type your text here "
          onChange={e => this.setState({ upload: e.target.value })}
        />
        <button
          className="btn btn-primary btn-user btn-block"
          onClick={e => this.handleClick(e)}
        >
          Upload Text
        </button>
      </a>
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
    createNewMedia: media => {
      dispatch(createNewMedia(media));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextUpload);
