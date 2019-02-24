import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./rightBanner.css";
// import GOTM_one from "../../images/GOTM_one.jpg";
// import GOTM_two from "../../images/GOTM_two.jpg";
// import GOTM_three from "../../images/GOTM_three.jpg";

class RightBanner extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     GOTM_image: GOTM_one
  //   };
  // }
  render() {
    return (
      <div className="borderRL">
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

// let GOTM_images = [GOTM_one, GOTM_two, GOTM_three];

// let playGOTM = (images) => {
//   if(images) {
//     src = this.setState(images[])
//   }
// };

export default RightBanner;
