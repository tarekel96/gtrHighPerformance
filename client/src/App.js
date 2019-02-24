import React from "react";
import "./css/App.css";
import { Container, Col, Row } from "react-bootstrap";
import Navs from "./components/Navbar/Navs";
import Gtr from "./pages/GtrHigh/GtrHigh";
// import LeftBanner from "./components/Left_Banner/Left_Banner.js";
// import RightBanner from "./components/Right_Banner/Right_Banner.js";
import AboutHome from "../src/pages/AboutHome/AboutHome.js";
import Founders from "./pages/About/Founders.js";
import History from "../src/pages/History/History.js";
import Staff from "../src/pages/Staff/Staff.js";

const App = () => (
  // xs={1} sm={1} md={1} lg={2}
  // xs={4} sm={6} md={8} lg={8}
  <div>
    <Navs fixed="top" fluid />
    <Container id="masterCon" fluid>
      <div id="topContainer" className="topPortion" fluid>
        <Row className="row flex absolute" id="colMid">
          {/* <Col id="colLeft" xs={1} sm={false} md={2} lg={2}>
            <LeftBanner />
          </Col> */}
          {/* <Col id="colMid" xs={10} sm={10} md={8} lg={8}> */}
          <Col>
            <Gtr />
          </Col>
          {/* </Col> */}
          {/* <Col id="colRight" xs={1} sm={false} md={2} lg={2}>
            <RightBanner />
          </Col> */}
        </Row>
      </div>
      <div id="aboutCon" fluid>
        <Row className="absolute">
          <Col>
            <AboutHome />
          </Col>
        </Row>
      </div>
      <div id="foundersCon">
        <Founders />
      </div>
      <div id="histCon">
        <History />
      </div>
      <div id="staffCon">
        <Staff />
      </div>
    </Container>
  </div>
);

export default App;
