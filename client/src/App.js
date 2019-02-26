import React from "react";
import "./css/App.css";
import Navs from "./components/Navbar/Navs";
import AboutHome from "../src/pages/AboutHome/AboutHome.js";
import About from "./pages/About/About";
import Appt from "./pages/Appt/index.js";

const App = () => (
  <div>
    <Navs fixed="top" fluid />
    <AboutHome
      titleInitial={""}
      historyInitialOne={""}
      historyInitialTwo={""}
      historyInitialThree={""}
    />
    <About />
    <Appt />
  </div>
);

export default App;
