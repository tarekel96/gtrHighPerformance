import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./leftBanner.css";

class LeftBanner extends Component {
  state = {};
  render() {
    return (
      <div>
        <Image
          id="gtrLeft"
          src={window.location.origin + "/images/gtrInverted.jpg"}
          fluid
        />
        <Image
          id="gtrLeftTwo"
          src={window.location.origin + "/images/gtrLogo.png"}
          fluid
        />
      </div>
    );
  }
}

export default LeftBanner;
