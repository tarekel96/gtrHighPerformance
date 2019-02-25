import React from "react";
import "./css/App.css";
// import { Container, Col, Row } from "react-bootstrap";
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
    <Gtr />
    <AboutHome />
    =
    <Founders />
    <History />
    <div id="staffCon">
      <Staff />
    </div>
  </div>
);

export default App;
