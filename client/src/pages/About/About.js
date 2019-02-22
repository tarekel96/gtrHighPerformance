import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Gonz from "../../components/About/Gonz/Gonz.js";
import historyTop from "../../images/historyTop.png";
import historyBot from "../../images/historyBot.png";
import Ric from "../../components/About/Ric/Ric.js";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container id="aboutContainer">
          {/* First Row */}
          <Row className="bio">
            <Col lg={4} id="topLBio">
              <Gonz />
            </Col>
            <Col lg={8} className="bioInfo">
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

            {/* <Col
              id="historyOne"
              lg={6}
              style={{
                backgroundImage: `url(${historyTop})`,

                backgroundPosition: "center",
                backgroundRepeat: "no - repeat",
                backgroundSize: "cover",
                borderBottom: "thick black solid",
                borderTop: "medium black solid"
              }}
            >
              <header>
                <h3 id="title">The History of GTR</h3>
              </header>
              <section>
                <article className="justify">
                  Founded in 1997, GTR High Performance was created by two
                  long-time Mustang enthusiasts, Gonzalo & Ricardo Topete. The
                  concept was simple: to create a positive and rewarding Mustang
                  shop experience. With a courteous, professional, and
                  knowledgeable staff, GTR High Performance has emerged as one
                  of the premier Mustang performance shops in the country.
                  Regular appearances and features in national Mustang
                  publications such as: 5.0 Mustangs & SuperFords Magazine,
                  Mustang Enthusiast Magazine and media such as PowerTV are a
                  testament to the quality of work available at GTR High
                  Performance.
                </article>
              </section>
            </Col> */}
          </Row>
          {/* Second Row */}
          <Row className="bio">
            <Col lg={4}>
              <Ric />
            </Col>
            <Col lg={8} className="bioInfo">
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
            {/* <Col
              style={{
                backgroundImage: `url(${historyBot})`,

                backgroundPosition: "center",
                backgroundRepeat: "no - repeat",
                backgroundSize: "cover"
              }}
              lg={6}
            >
              <section>
                <article id="historyBot" className="justify">
                  Originating from a modest 1000 sq./ft. shop with one bay for
                  installations and a tiny office, GTR High Performance forged a
                  strong reputation for quality workmanship, excellent customer
                  service, and competetive pricing. Over the course of a decade,
                  GTR High Performance expanded its services by offering a
                  larger line of top-quality performance parts and accessories
                  for Mustangs. The increased growth created the need for a
                  larger facility. GTR High Performance, now in its 3rd
                  location, offers the Mustang enthusiast the ultimate toy
                  store. Comprised of over 8500 sq./ft. of Mustang paradise
                  featuring a fully stocked parts warehouse, showroom, customer
                  waiting room and state-of-the-art installation center. The
                  highlight of GTR's installation shop is a DynoJet 224X chassis
                  dynomometer. Capable of registering up to 1500 horsepower and
                  reaching speeds up to 200 mph, it can tame even the wildest
                  Pony! Contact GTR High Performance to schedule your dyno test
                  or tuning session.
                </article>
              </section>
            </Col> */}
          </Row>
          {/* Third Row */}
          {/* <Row>
            <Col lg={6} />
          </Row> */}
        </Container>
        {/* <aside>
          Next time you are in the market for Mustang performance parts and
          accessories or installation help or simply a dyno-test, contact GTR
          High Performance. You and your Mustang will be treated with the
          respect and attention to detail you deserve and expect. Remember,
          whether you plan on building a Mustang for the drag strip,
          road-course, show-circuit, or simply fun on the street, GTR High
          Performance IS your Mustang Race Place!
        </aside> */}
      </div>
    );
  }
}

export default About;
