import React from "react";
import "./css/App.css";
import { Container, Col, Row } from "react-bootstrap";
import Navs from "./components/Navbar/Navs";
import Gtr from "./pages/GtrHigh";
import LeftBanner from "./components/Left_Banner/Left_Banner.js";

const App = () => (
  <div>
    <Navs />
    <Container>
      <Row>
        <Col xs={2}>
          <LeftBanner />
        </Col>
        <Col xs={8}>
          <Gtr />
        </Col>
        <Col xs={2}>Right Column</Col>
      </Row>
    </Container>
  </div>
);

export default App;
