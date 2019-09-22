import React, { Component } from "react";
import { connect } from "react-redux";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

// graph
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

class ViewCountGraph extends Component {
  displayNoActiveMediaCard() {
    return <h2>No active media selected</h2>;
  }

  displayGraph() {
    const data = this.props.activeMedia.views.map(view => {
      return {
        name: new Date(view.date).toDateString(),
        uv: view.views
      };
    });

    return (
      <div className="card-body">
        <ResponsiveContainer aspect={2.5}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer >
      </div>
    );
  }

  render() {
    return (
      <div className="ViewCountGraph">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              AR Experience View Count
            </h6>
          </div>
          {!this.props.activeMedia
            ? this.displayNoActiveMediaCard()
            : this.displayGraph()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeMedia: state.reducer.activeMediaObj
  };
};

export default connect(mapStateToProps)(ViewCountGraph);
