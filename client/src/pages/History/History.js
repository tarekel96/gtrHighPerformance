import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import historyBot from "../../images/history.png";
import "./history.css";

class History extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={2} />
            <Col
              id="histDoc"
              lg={8}
              // style={{
              //   backgroundImage: `url(${historyBot})`,
              //   height: "100%",
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no - repeat",
              //   backgroundSize: "cover"
              // }}
            >
              <header>
                <h3 id="title">The History of GTR</h3>
              </header>
              <section className="padPar">
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
                <article className="justify" id="midPar">
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
                <article className="justify" id="botPar">
                  Next time you are in the market for Mustang performance parts
                  and accessories or installation help or simply a dyno-test,
                  contact GTR High Performance. You and your Mustang will be
                  treated with the respect and attention to detail you deserve
                  and expect. Remember, whether you plan on building a Mustang
                  for the drag strip, road-course, show-circuit, or simply fun
                  on the street, GTR High Performance IS your Mustang Race
                  Place!
                </article>
              </section>
            </Col>
            <Col lg={2} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default History;
