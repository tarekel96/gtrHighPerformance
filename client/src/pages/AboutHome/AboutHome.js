import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./aboutHome.css";

class AboutHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="aboutHome">
        <Container fluid>
          <Row>
            <Col>
              <div className="containerAbout">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  class="image"
                />
                <div class="middle">
                  <Button class="text">History</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div class="containerAbout">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  class="image"
                />
                <div class="middle">
                  <Button class="text">Founders</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div class="containerAbout">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  class="image"
                />
                <div class="middle">
                  <Button class="text">Staff</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutHome;
