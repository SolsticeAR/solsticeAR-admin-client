import React, { Component } from "react";
import { connect } from "react-redux";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
   
  }

  render() {
    return (
      <div class="fb-share-button" data-href="https://espn.com" data-layout="button" data-size="large">
         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" 
         class="fb-xfbml-parse-ignore">Share</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.reducer.campaigns
  };
};

export default connect(
  mapStateToProps
)(Share);
