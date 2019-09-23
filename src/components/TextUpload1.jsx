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
    console.log("the form is closing")
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
    console.log("this is state upload", this.state.upload)
    this.props.createNewMedia(media);
    this.closeForm()
  }

  render() {
    return (
      // <a className="nav-link" href="#home">
      //   <i className="fas fa-fw fa-tachometer-alt"></i>
      //   <span>Upload Text</span>
      //   <input
      //     type="text"
      //     className="form-control form-control-user"
      //     id="textUpload"
      //     placeholder="Type your text here "
      //     onChange={e => this.setState({ upload: e.target.value })}
      //   />
      //   <button
      //     className="btn btn-primary btn-user btn-block"
      //     onClick={e => this.handleClick(e)}
      //   >
      //     Upload Text
      //   </button>
      // </a>
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
