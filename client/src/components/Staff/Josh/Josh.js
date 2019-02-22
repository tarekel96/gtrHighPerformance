import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./josh.css";
class Josh extends Component {
  state = {};
  render() {
    return (
      <Figure>
        <Figure.Caption className="blackFont B6">
          <h4>Josh Felton</h4>
          <h6>Marketing/Advertising/Web Site/Photography </h6>
        </Figure.Caption>
        <Figure.Image
          src={window.location.origin + "/images/Josh.jpg"}
          fluid
          className="figBorders"
        />
      </Figure>
    );
  }
}

export default Josh;
