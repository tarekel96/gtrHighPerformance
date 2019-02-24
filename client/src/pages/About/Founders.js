import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Gonz from "../../components/About/Gonz/Gonz.js";
import Ric from "../../components/About/Ric/Ric.js";
import "./about.css";

class Founders extends Component {
  state = {};
  render() {
    return (
      <div id="foundersCon">
        <h1 id="header">The Founders</h1>
        <Container>
          {/* First Row */}
          <Row className="biog">
            <Col lg={4}>
              <Gonz />
            </Col>
            <Col lg={8} className="topMargin">
              <section>
                <ul>
                  <li>
                    <span className="bold">Education:</span> Bachelor of Science
                    Business Administration, University of California,
                    Riverside, 1997.
                  </li>
                  <li>
                    <span className="bold">Hobbies:</span> Microsoft X-Box &
                    sports.
                  </li>
                  <li>
                    <span className="bold">Favorite Food:</span> Anything his
                    wife, Lauri, makes.
                  </li>
                  <li>
                    <span className="bold">Personal Rides:</span> Vortech
                    Intercooled Supercharged 2006 Mustang GT (465 RWHP), 1989
                    Mustang 5.0 LX, 1999 Camaro Z-28 (Yes, a Camaro?!), 2007
                    Tahoe.
                  </li>
                </ul>
              </section>
            </Col>
          </Row>
          {/* Second Row */}
          <Row className="biog">
            <Col lg={4}>
              <Ric />
            </Col>
            <Col lg={8} className="topMargin">
              <section>
                <ul>
                  <li>
                    <span className="bold">Education:</span> Bachelor of Science
                    Business Administration, University of California,
                    Riverside, 1997. A.S.E Certified: A1 Engine Repair, A8
                    Engine Performance, A3 Manual Drivetrains, A4 Suspension &
                    Steering, A5 Braking Systems.
                  </li>
                  <li>
                    <span className="bold">Hobbies:</span> Spending time with
                    family, Traveling, Bicycling, Cruising in Mustangs & making
                    horsepower!
                  </li>
                  <li>
                    <span className="bold">Favorite Food:</span> Any dead and
                    cooked animal is fair game.
                  </li>
                  <li>
                    <span className="bold">Personal Rides:</span> Paxton
                    Supercharged 2001 Mustang GT, Vortech Supercharged 1994 SVT
                    Cobra (sold), 1992 Mustang GT (sold), 1964 1/2 Mustang 289,
                    2005 Ford F-150 SuperCrew, 2006 Infiniti G35 Coupe. (Ricardo
                    doesn't know the meaning of "factory stock").
                  </li>
                </ul>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Founders;
