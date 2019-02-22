import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./gonz.css";
class Gonz extends Component {
  state = {};
  render() {
    return (
      <Figure>
        <Figure.Caption className="blackFont B6">
          <h4>Gonzalo Topete</h4>
          <h6>President and Co-Founder of GTR High</h6>
        </Figure.Caption>
        <Figure.Image
          src={window.location.origin + "/images/Gonz.jpeg"}
          fluid
          className="figBorder"
        />
      </Figure>
    );
  }
}

export default Gonz;
