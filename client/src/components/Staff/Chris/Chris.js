import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./chris.css";
class Chris extends Component {
  state = {};
  render() {
    return (
      <Figure>
        <Figure.Caption className="blackFont B6">
          <h4>Chris Balster</h4>
          <h6>Technician/Installer</h6>
        </Figure.Caption>
        <Figure.Image
          src={window.location.origin + "/images/Chris.jpg"}
          fluid
          className="figBorders"
        />
      </Figure>
    );
  }
}

export default Chris;
