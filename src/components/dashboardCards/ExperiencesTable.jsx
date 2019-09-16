import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class ExperiencesTable extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="ExperiencesTable">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Your AR Experiences
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>AR Experience Name</th>
                    <th>AR Type (video, img..)</th>
                    <th>Date Created</th>
                    <th>View Count</th>
                    <th>Select Active Media</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.campaigns.length !== 0 ? (
                    this.props.campaigns[0].media.map(media => (
                      <tr>
                        <td>{media.name}</td>
                        <td>{media.type}</td>
                        <td>
                          {media.views.length !== 0
                            ? new Date(
                                Number(media.views[0].date)
                              ).toLocaleString()
                            : "--"}
                        </td>
                        <td>
                          {media.views.length !== 0
                            ? media.views.reduce(
                                (accumulator, currentValue) => ({
                                  views: accumulator.views + currentValue.views
                                })
                              ).views
                            : "--"}
                        </td>
                        <td>
                          {" "}
                          <Button variant="success">Active</Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>Garrett Winters</td>
                      <td>Video</td>
                      <td>2013/07/01</td>
                      <td>63</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    campaigns: state.reducer.campaigns
  };
};

//const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(ExperiencesTable);
