import React, { Component } from "react";
import { Figure } from "react-bootstrap";
class Gonz extends Component {
  state = {};
  render() {
    return (
      <Figure className="left">
        <Figure.Caption>
          <h4>Gonzalo Topete</h4>
          <h6>President and Co-Founder of GTR High</h6>
        </Figure.Caption>
        <Figure.Image
          src={window.location.origin + "/images/Gonz.jpeg"}
          fluid
        />
      </Figure>
    );
  }
}

export default Gonz;
