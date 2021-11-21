import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Statedata from "./Statedata";

class India extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/countries/india")
      .then((response) => {
        this.setState({ data: response.data });
        console.log(response.data);
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <br />
          <h2 style={{ textAlign: "center" }}>INDIA</h2>
          <br />
          <div className="col-md-12">
            <div
              className="row"
              style={{ textAlign: "center", marginLeft: "38px" }}
            >
              <div className="col-md-3">
                <Card
                  bg="primary"
                  style={{
                    width: "18rem",
                    color: "white",
                  }}
                >
                  <Card.Header>Total Cases</Card.Header>
                  <Card.Body>
                    <Card.Title>{this.state.data.cases}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  bg="warning"
                  style={{
                    width: "18rem",
                    color: "white",
                  }}
                >
                  <Card.Header>Active Cases</Card.Header>
                  <Card.Body>
                    <Card.Title>{this.state.data.active}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  bg="success"
                  style={{
                    width: "18rem",
                    color: "white",
                  }}
                >
                  <Card.Header>Recovered</Card.Header>
                  <Card.Body>
                    <Card.Title>{this.state.data.recovered}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  bg="danger"
                  style={{
                    width: "18rem",
                    color: "white",
                  }}
                >
                  <Card.Header>Deaths</Card.Header>
                  <Card.Body>
                    <Card.Title>{this.state.data.deaths}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br />
          <Statedata />
          <br />
        </div>
      </div>
    );
  }
}

export default India;
