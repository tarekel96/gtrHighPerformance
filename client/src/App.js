import React from "react";
import "./css/App.css";
import Nav from "./components/Navbar/Navs.js";
import Home from "./pages/Home/index.js";
import History from "../src/pages/History/History.js";
import Appt from "./pages/Appt/index.js";
import Members from "./pages/Members/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import upgradeInfo from "./pages/upgradeInfo/index.js";
import CalendarCom from "./components/Calendar/index.js";
// import ScrollUpButton from "./components/ScrollUpButton/index.js";

const App = () => (
  <Router>
    <div>
      <Nav />
      {/* <ScrollUpButton /> */}
      <Route path="/" component={Home} exact={true} />
      <Route
        path="/about"
        render={props => (
          <div>
            <History />
            <Members />
          </div>
        )}
      />
      <Route path="/email" component={Appt} exact={true} />
      <Route path="/calendar" component={CalendarCom} exact={true} />
      <Route path="/upgrade_info" component={upgradeInfo} exact={true} />
    </div>
    {/* <Footer id="footCom" /> */}
  </Router>
);

export default App;
