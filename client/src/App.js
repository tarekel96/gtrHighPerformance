import React from "react";
import "./css/App.css";
import { Container, Col, Row } from "react-bootstrap";
import Navs from "./components/Navbar/Navs";
import Gtr from "./pages/GtrHigh";
import LeftBanner from "./components/Left_Banner/Left_Banner.js";

const App = () => (
  <div id="leftContainer">
    <Navs />
    <Container>
      <Row>
        <Col id="colLeft" xs={2}>
          <LeftBanner />
        </Col>
        <Col id="colMid" xs={8}>
          <Gtr />
        </Col>
        <Col id="colRight" xs={2}>
          Right Column
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
