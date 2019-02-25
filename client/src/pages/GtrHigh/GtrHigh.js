import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./gtrHigh.css";

class Gtr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // let gtrData = this.props.gtrData;
    // let intro = "Welcome Muscle Car Enthusiasts";
    return (
      <div id="gtrDiv">
        <Container>
          <Row>
            <Col lg={12}>
              <header>
                <span className="spanHeader block">{this.props.intro}</span>
                {/* <span className="spanHeader block">Car Enthusiasts</span> */}
              </header>

              {/* <footer id="topFooter">Copywrite @GTRHighPerformance</footer> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

{
  /* <container id="gtrValues">
          <row>
            <col sm={4}>Passionate</col>
            <col sm={4}>Experienced</col>
            <col sm={4}>Quality</col>
          </row>
        </container> */
}
{
  /* <section id="gtrValues">
          <span className="middleValue">Passionate</span>
          <span className="middleValue">Experienced</span>
          <span className="middleValue">Quality</span>
        </section> */
}

export default Gtr;
