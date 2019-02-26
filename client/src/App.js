import React from "react";
import "./css/App.css";
import Navs from "./components/Navbar/Navs";
import AboutHome from "../src/pages/AboutHome/AboutHome.js";
import About from "./pages/About/About";
let classList = [`Navs, AboutHome, About`];
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
  </div>
);

export default App;
