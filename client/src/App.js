import React from "react";
import "./css/App.css";
import Home from "./pages/Home/index.js";
import History from "../src/pages/History/History.js";
// import About from "./pages/About/About";
import Appt from "./pages/Appt/index.js";
import Members from "./pages/Members/index.js";

const App = () => (
  <div>
    {/* <Navs fixed="top" fluid /> */}
    <Home />
    <Members />
    <History
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
