import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

class Campaigns extends Component {
  render() {
    return (
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>Video</td>
                  <td>2011/01/26</td>
                  <td>61</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Video</td>
                  <td>2013/07/01</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Video</td>
                  <td>2015/01/01</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Image</td>
                  <td>2011/09/01</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Image</td>
                  <td>2011/01/01</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>Text</td>
                  <td>2010/01/25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Herrod Chandler</td>
                  <td>Text</td>
                  <td>2011/07/25</td>
                  <td>2011</td>
                </tr>
                <tr>
                  <td>Rhona Davidson</td>
                  <td>Text</td>
                  <td>2012/01/25</td>
                  <td>55</td>
                </tr>
                <tr>
                  <td>Colleen Hurst</td>
                  <td>Image</td>
                  <td>2011/01/23</td>
                  <td>39</td>
                </tr>
                <tr>
                  <td>Shad Decker</td>
                  <td>Image</td>
                  <td>2011/01/25</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td>Michael Bruce</td>
                  <td>Text</td>
                  <td>2011/01/25</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Image</td>
                  <td>2011/12/10</td>
                  <td>27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Campaigns;
