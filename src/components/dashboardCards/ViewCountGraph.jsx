import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

class ViewCountGraph extends Component {
  render() {
    return (
      <div class="ViewCountGraph">
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">
              AR Experience View Count
            </h6>
          </div>

          <div class="card-body">
            <div class="chart-area">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCountGraph;
