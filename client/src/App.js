import React from "react";
import "./css/App.css";
import { Container, Col, Row } from "react-bootstrap";
import Navs from "./components/Navbar/Navs";
import Gtr from "./pages/GtrHigh/GtrHigh";
import LeftBanner from "./components/Left_Banner/Left_Banner.js";
import RightBanner from "./components/Right_Banner/Right_Banner.js";
import About from "./pages/About/About.js";
import History from "../src/pages/History/History.js";
import Staff from "../src/pages/Staff/Staff.js";

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
    <div id="aboutCon">
      <About />
    </div>
    <div id="histCon">
      <History />
    </div>
    <div id="staffCon">
      <Staff />
    </div>
  </div>
);

export default App;
