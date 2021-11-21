import axios from "axios";
import React, { Component } from "react";

class World extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
      this.setState({ data: response.data });
      console.log(response.data);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <br />
          <h2 style={{ textAlign: "center" }}>WORLD</h2>
          <br />
          <table className="table table-bordered table-stripped">
            <thead>
              <tr>
                <td>Country</td>
                <td>Total Cases</td>
                <td>Recovered</td>
                <td>Deaths</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((itm, ky) => {
                return (
                  <tr>
                    <td>
                      {itm.country} -
                      <img
                        src={itm.countryInfo.flag}
                        alt=""
                        style={{ width: "40px", marginLeft: "15px" }}
                      />
                    </td>
                    <td>
                      <span className="btn-secondary p-1 m-1">{itm.cases}</span>
                    </td>
                    <td>
                      <span className="btn-secondary p-1 m-1">
                        {itm.recovered}
                      </span>
                    </td>
                    <td>
                      <span className="btn-secondary p-1 m-1">
                        {itm.deaths}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default World;
