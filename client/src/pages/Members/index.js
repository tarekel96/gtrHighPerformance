import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./members.css";
import Gonz from "../../components/Members/Gonz/index.js";
import Ric from "../../components/Members/Ric/index.js";
import Eli from "../../components/Members/Eli/index.js";
import Chris from "../../components/Members/Chris/index.js";
import Dave from "../../components/Members/Dave/index.js";
import Josh from "../../components/Members/Josh/index.js";
import Footer from "../../components/Footer/index.js";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main id="staffContainer">
        <Container id="members-container">
          <Row id="members-row-one">
            <Col lg="4" className="members-spacing">
              <Gonz />
            </Col>
            <Col lg="4" className="members-spacing">
              <Ric />
            </Col>
            <Col lg="4" className="members-spacing">
              <Eli />
            </Col>
          </Row>
          <Row id="members-row-two">
            <Col lg="4" className="members-spacing">
              <Chris />
            </Col>
            <Col lg="4" className="members-spacing">
              <Dave />
            </Col>
            <Col lg="4" className="members-spacing">
              <Josh />
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    );
  }
}

export default Members;
