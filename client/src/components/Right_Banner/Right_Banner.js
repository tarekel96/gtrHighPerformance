import React, { Component } from "react";
import { Image } from "react-bootstrap";

class RightBanner extends Component {
  state = {};
  render() {
    return (
      <div className="borderLR">
        <Image
          id="gotm"
          src={window.location.origin + "/images/GOTM.gif"}
          fluid
        />
        <Image src={window.location.origin + "/images/KenneBell.jpg"} fluid />
        <Image src={window.location.origin + "/images/vortech.png"} fluid />
        <Image
          id="roush"
          src={window.location.origin + "/images/roush.png"}
          fluid
        />
        <Image src={window.location.origin + "/images/paxton.jpg"} fluid />
        <Image src={window.location.origin + "/images/fordRacing.jpg"} fluid />
      </div>
    );
  }
}

export default RightBanner;
