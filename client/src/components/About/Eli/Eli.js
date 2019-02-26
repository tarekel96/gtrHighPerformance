import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./eli.css";
class Eli extends Component {
  state = {};
  render() {
    return (
      <Figure>
        <Figure.Caption className="blackFont B6">
          <h4>Elisseos Patronas</h4>
          <h6>Sales Associate/ Customer Service / Installer</h6>
        </Figure.Caption>
        <Figure.Image
          src={window.location.origin + "/images/Eli.jpg"}
          fluid
          className="figBorder"
        />
      </Figure>
    );
  }
}

export default Eli;
