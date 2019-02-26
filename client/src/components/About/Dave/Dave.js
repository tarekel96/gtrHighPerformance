import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./dave.css";
class Dave extends Component {
  state = {};
  render() {
    return (
      <Figure>
        <Figure.Caption className="blackFont B6">
          <h4>Dave Chamberlain</h4>
          <h6>Technician/Installer</h6>
        </Figure.Caption>
        <Figure.Image
          src={window.location.origin + "/images/Dave.jpg"}
          fluid
          className="figBorder"
        />
      </Figure>
    );
  }
}

export default Dave;
