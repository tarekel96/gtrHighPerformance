import React, { Component } from "react";
import { Image } from "react-bootstrap";

class LeftBanner extends Component {
  state = {};
  render() {
    return (
      <Image src={window.location.origin + "/images/gtrInverted.jpg"} fluid />
    );
  }
}

export default LeftBanner;
