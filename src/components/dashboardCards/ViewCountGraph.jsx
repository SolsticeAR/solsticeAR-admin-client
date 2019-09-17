import React, { Component } from "react";
import { trySetActiveMedia, setActiveMediaUrl } from "../../actions";
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
  Tooltip
} from "recharts";

class ViewCountGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {
        name: "Page A",
        uv: 4000
      },
      {
        name: "Page B",
        uv: 3000
      },
      {
        name: "Page C",
        uv: 2000
      },
      {
        name: "Page D",
        uv: 2780
      }
    ];

    return (
      <div className="ViewCountGraph">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              AR Experience View Count
            </h6>
          </div>

          <div className="card-body">
            <AreaChart
              width={700}
              height={300}
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
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
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

const mapDispatchToProps = dispatch => {
  return {
    setActiveMediaUrl: url => {
      dispatch(setActiveMediaUrl(url));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCountGraph);
