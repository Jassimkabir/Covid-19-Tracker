import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import India from "./Components/India";
import World from "./Components/World";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<India />} />
            <Route exact path="/india" element={<India />} />
            <Route exact path="/world" element={<World />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
