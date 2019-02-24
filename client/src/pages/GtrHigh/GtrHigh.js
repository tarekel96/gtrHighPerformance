import React, { Component } from "react";
import "./gtrHigh.css";

class Gtr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <span className="spanHeader block">Welcome Muscle</span>
          <span className="spanHeader block">Car Enthusiasts</span>
        </header>
        {/* <container id="gtrValues">
          <row>
            <col sm={4}>Passionate</col>
            <col sm={4}>Experienced</col>
            <col sm={4}>Quality</col>
          </row>
        </container> */}
        {/* <section id="gtrValues">
          <span className="middleValue">Passionate</span>
          <span className="middleValue">Experienced</span>
          <span className="middleValue">Quality</span>
        </section> */}
        <footer id="topFooter">Copywrite @GTRHighPerformance</footer>
      </div>
    );
  }
}

export default Gtr;
