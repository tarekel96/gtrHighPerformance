import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./ric.css";

class Ric extends Component {
  state = {};
  render() {
    return (
      <Figure>
        <Figure.Caption className="blackFont B6">
          <h4>Ricardo Topete</h4>
          <h6>Vice-President and Co-Founder of GTR High</h6>
        </Figure.Caption>
        <Figure.Image
          src={window.location.origin + "/images/Ric.jpg"}
          fluid
          className="figBorder"
        />
        <Figure.Image
          src={window.location.origin + "/images/1967mustang.jpg"}
          fluid
          id="mustang"
          className="figBorder"
        />
      </Figure>
    );
  }
}

export default Ric;
