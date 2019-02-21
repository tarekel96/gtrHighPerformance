import React from "react";
import "./css/App.css";
import { Container, Col, Row } from "react-bootstrap";
import Navs from "./components/Navbar/Navs";
import Gtr from "./pages/GtrHigh/GtrHigh";
import LeftBanner from "./components/Left_Banner/Left_Banner.js";
import RightBanner from "./components/Right_Banner/Right_Banner.js";
import About from "./pages/About/About.js";

const App = () => (
  <div>
    <div id="topPortion">
      <Navs fixed="top" />
      <Container id="topContainer">
        <Row className="row flex">
          <Col id="colLeft" lg={2}>
            <LeftBanner />
          </Col>
          <Col id="colMid" lg={8}>
            <Gtr />
          </Col>
          <Col id="colRight" lg={2}>
            <RightBanner />
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <About />
    </Container>
  </div>
);

export default App;
