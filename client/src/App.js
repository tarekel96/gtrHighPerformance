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
  <div>
    <Navs fixed="top" fluid />
    <Gtr intro={"Welcome to GTR High Performance"} />
    <AboutHome titleInitial={""} historyInitial={[""]} />
    <Founders />
    <History />
    <div id="staffCon">
      <Staff />
    </div>
  </div>
);

export default App;
