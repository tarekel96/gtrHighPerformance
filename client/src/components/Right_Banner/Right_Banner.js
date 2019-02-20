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
      </div>
    );
  }
}

export default RightBanner;
