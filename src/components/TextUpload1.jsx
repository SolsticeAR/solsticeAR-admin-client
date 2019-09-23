import React, { Component } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { createNewMedia } from "../actions/index";


=======
import { createNewMedia } from "../actions/index";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "../styles/App.css"
>>>>>>> 6cbf69aa86fe6a41af82a45ead79afbea794aec4

class TextUpload1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: ""
    };
  }
<<<<<<< HEAD
  handleClick(e) {
      console.log("this is upload",this.state.upload)
=======
  closeForm(){
    document.getElementById('messageForm').style.display = "none"
    document.getElementById('overlay').style.display = "none"
  }
  handleClick(e) {
>>>>>>> 6cbf69aa86fe6a41af82a45ead79afbea794aec4
    e.preventDefault();
    const media = {
      name: this.state.upload,
      url: "",
      type: "text",
      campaignId: 1 // Set to default 1st campaign
    };
<<<<<<< HEAD
    this.props.createNewMedia(media);
  }
  render() {
    return (
    //   <a className="nav-link" href="#home">
    //     <i className="fas fa-fw fa-tachometer-alt"></i>
    //     <span>Upload Text</span>
    //     <input
    //       type="text"
    //       className="form-control form-control-user"
    //       id="textUpload"
    //       placeholder="Type your text here "
    //       onChange={e => this.setState({ upload: e.target.value })}
    //     />
    //     <button
    //       className="btn btn-primary btn-user btn-block"
    //       onClick={e => this.handleClick(e)}
    //     >
    //       Upload Text
    //     </button>
    //   </a>

    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Compose Message</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
=======
    console.log("this is state upload", this.state.upload)
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
>>>>>>> 6cbf69aa86fe6a41af82a45ead79afbea794aec4
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
<<<<<<< HEAD
              <MDBBtn color="warning" outline type="submit" onClick={e => this.handleClick(e)}>
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
=======
              <MDBBtn class="messageFormButton"  outline type="submit" onClick={e => this.handleClick(e)}>
                Send
              </MDBBtn>
              <MDBBtn class="messageFormButton"  outline onClick={()=>this.closeForm()}>
                Cancel
>>>>>>> 6cbf69aa86fe6a41af82a45ead79afbea794aec4
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
<<<<<<< HEAD
=======
    </div>
>>>>>>> 6cbf69aa86fe6a41af82a45ead79afbea794aec4
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
