import React from "react";
import shelby from "../../images/Shelby.jpg";
import "./gtrHigh.css";

const Gtr = props => (
  <div id="gtrDiv" style={{ backgroundImage: `url(${shelby})` }}>
    <header>
      <span className="spanHeader block">{props.intro}</span>
      <span className="spanHeader block" id="highPer">
        {props.introTwo}
      </span>
    </header>
  </div>
);

export default Gtr;
