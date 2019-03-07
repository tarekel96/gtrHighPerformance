import React from "react";
import "./css/App.css";
import Home from "./pages/Home/index.js";
import History from "../src/pages/History/History.js";
// import About from "./pages/About/About";
import Appt from "./pages/Appt/index.js";
import Members from "./pages/Members/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      {/* <Navs fixed="top" fluid /> */}
      <Route path="/" component={Home} />
      <Route path="/members" component={Members} />
      {/* <Members /> */}
      <Route
        path="/history"
        render={props => (
          <History
            {...props}
            header={""}
            historyInitialOne={""}
            historyInitialTwo={""}
            historyInitialThree={""}
          />
        )}
      />
      <Route path="/email" component={Appt} />
      {/* <History
        header={""}
        historyInitialOne={""}
        historyInitialTwo={""}
        historyInitialThree={""}
      /> */}
      {/* <About /> */}
      {/* <Appt /> */}
    </div>
  </Router>
);

export default App;
