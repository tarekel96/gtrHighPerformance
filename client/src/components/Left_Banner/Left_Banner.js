import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./leftBanner.css";

class LeftBanner extends Component {
  state = {};
  render() {
    return (
      <div className="borderLR">
        <Image
          id="gtrLeft"
          src={window.location.origin + "/images/gtrInverted.jpg"}
          fluid
        />
        <Image src={window.location.origin + "/images/camaroSS.jpg"} fluid />
        <Image
          src={window.location.origin + "/images/mustangGTengine.jpg"}
          fluid
        />
        <Image src={window.location.origin + "/images/suspension.jpg"} fluid />
        <Image src={window.location.origin + "/images/mustang2016.jpg"} fluid />
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
