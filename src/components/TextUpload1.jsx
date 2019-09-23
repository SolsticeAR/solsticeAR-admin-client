import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewMedia } from "../actions/index";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "../styles/App.css"

class TextUpload1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: ""
    };
  }
  closeForm(){
    document.getElementById('messageForm').style.display = "none"
    document.getElementById('overlay').style.display = "none"
  }
  handleClick(e) {
    e.preventDefault();
    const media = {
      name: this.state.upload,
      url: "",
      type: "text",
      campaignId: 1 // Set to default 1st campaign
    };
<<<<<<< HEAD
=======
    
>>>>>>> 53e36f70b2f398ea6fdce67a6fe610fae4358afc
    this.props.createNewMedia(media);
    this.closeForm()
  }

  render() {
    return (
      <div id="overlay" >
        
      <MDBContainer id="messageForm">
    
      <MDBRow >
        <MDBCol md="6" id="formColumn">
          <form >
            <p className="h4 text-center">Compose Message</p>
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
              onChange={e => this.setState({ upload: e.target.value })}
            />
            <div className="text-center mt-4">
              <MDBBtn class="messageFormButton"  outline type="submit" onClick={e => this.handleClick(e)}>
                Send
              </MDBBtn>
              <MDBBtn class="messageFormButton"  outline onClick={()=>this.closeForm()}>
                Cancel
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewMedia: media => {
      dispatch(createNewMedia(media));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TextUpload1);
