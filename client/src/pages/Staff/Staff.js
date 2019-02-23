import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Eli from "../../components/Staff/Eli/Eli.js";
import Chris from "../../components/Staff/Chris/Chris.js";
import Dave from "../../components/Staff/Dave/Dave.js";
import Josh from "../../components/Staff/Josh/Josh.js";
import "./staff.css";

class Staff extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 id="header">Our Professional Staff</h1>
        <Container>
          {/* First Row */}
          <Row className="bio">
            <Col lg={4}>
              <Eli />
            </Col>
            <Col lg={8} className="topMargin">
              <section>
                <ul>
                  <li>
                    <span className="bold">Bio:</span> Started with GTR in 2002.
                    In charge of shipping/receiving, fulfilling sales orders and
                    parts sales in store. Eli ensures that your orders arrives
                    accurately and promptly. Eli lends a hand in the shop and
                    installs parts on a regular basis. Eli's hands-on experience
                    is an advantage to you, our customer.
                  </li>
                  <li>
                    <span className="bold">Hobbies:</span> Family,
                    skateboarding, gym.
                  </li>
                  <li>
                    <span className="bold">Favorite Food:</span> Gyros, lowfat
                    yogurt & cottage cheese.
                  </li>
                  <li>
                    <span className="bold">Personal Rides:</span> Paxton
                    Intercooled Supercharged 2000 Mustang GT. Has owned 5
                    Mustangs: 2 5.0 Mustang GT's, a 94 Mustang GT, a 99 Mustang
                    GT and his current 2000 GT. He has so many speeding tickets,
                    we call him "Ticket-Master".
                  </li>
                </ul>
              </section>
            </Col>
          </Row>
          {/* Second Row */}
          <Row className="bio">
            <Col lg={4}>
              <Chris />
            </Col>
            <Col lg={8} className="topMargin">
              <section>
                <ul>
                  <li>
                    <span className="bold">Education:</span> Universal Technical
                    Institute graduate, 2005. Ford FACT graduate, 2006. A.S.E.
                    certified Master Mechanic, A1 Engine Repair, A2 Automatic
                    Transmission, A3 Manual Drivetrains, A4 Suspension &
                    Steering, A5 Brakes, A6 Electronic Systems, A7 Heating & Air
                    Conditioning, A8 Engine Performance.
                  </li>
                  <li>
                    <span className="bold">Hobbies:</span> Fishing.
                  </li>
                  <li>
                    <span className="bold">Favorite Food:</span> Vietnamese
                    Food.
                  </li>
                  <li>
                    <span className="bold">Personal Rides:</span> 93 Ford F-350
                    460 big block, Ford Explorer, Toyota truck.
                  </li>
                </ul>
              </section>
            </Col>
          </Row>
          <Row className="bio">
            <Col lg={4}>
              <Dave />
            </Col>
            <Col lg={8} className="topMargin">
              <section>
                <ul>
                  <li>
                    <span className="bold">Bio:</span> Started with GTR in 2006.
                    Specializes in 5.0 Mustangs and truck performance. Was
                    owner/operator of Dave's Custom Motorsports (Upland, Ca)
                    1992-1996.
                  </li>
                  <li>
                    <span className="bold">Hobbies:</span> Las Vegas and
                    sleeping.
                  </li>
                  <li>
                    <span className="bold">Favorite Food:</span> Chili cheese
                    fries at The Hat.
                  </li>
                  <li>
                    <span className="bold">Personal Rides:</span> 06 Chrysler
                    300C SRT8, 96 Chevy Impala SS, 04 Chevy Truck 2500.
                    Previously owned 1986 Mustang GT & 1989 Mustang 5.0.
                  </li>
                </ul>
              </section>
            </Col>
          </Row>
          {/* Second Row */}
          <Row className="bio">
            <Col lg={4}>
              <Josh />
            </Col>
            <Col lg={8} className="topMargin">
              <section>
                <ul>
                  <li>
                    <span className="bold">Bio:</span> Started working with GTR
                    in 2002. Designs, updates, and maintains advertisements in
                    magazines, web site, and promotional media such as
                    calendars, flyers, brochures, etc...
                  </li>
                  <li>
                    <span className="bold">Hobbies:</span> Family, and
                    apparently, work.
                  </li>
                  <li>
                    <span className="bold">Favorite Food:</span> Anything the
                    majority of North Americans consider food is fine by me.
                  </li>
                  <li>
                    <span className="bold">Personal Rides:</span> 2005 Dodge
                    Magnum RT, 2005 Ford F-150 FX4 SuperCrew
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

export default Staff;
