import React from "react";
import "./css/App.css";
import Home from "./pages/Home/index.js";
import AboutHome from "../src/pages/AboutHome/AboutHome.js";
// import About from "./pages/About/About";
import Appt from "./pages/Appt/index.js";
import History from "./pages/History/index.js";

const App = () => (
  <div>
    {/* <Navs fixed="top" fluid /> */}
    <Home />
    <History />
    <AboutHome
      header={""}
      historyInitialOne={""}
      historyInitialTwo={""}
      historyInitialThree={""}
    />
    {/* <About /> */}
    <Appt />
  </div>
);

export default App;
