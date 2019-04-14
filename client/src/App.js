import React, { Fragment } from "react";
import "./css/App.css";
import Nav from "./components/Navbar/Navs.js";
import Home from "./pages/Home/index.js";
import History from "../src/pages/History/History.js";
import Appt from "./pages/Appt/index.js";
import Members from "./pages/Members/index.js";
import Customers from "./pages/Customers/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpgradeInfo from "./pages/UpgradeInfo/index.js";
import UpgradePackages from "./pages/UpgradePackages/index.js";
import CalendarCom from "./components/Calendar/index.js";
import Footer from "./components/Footer/index.js";
// import ScrollUpButton from "./components/ScrollUpButton/index.js";

const App = () => (
  <Router>
    <Fragment>
      <Nav />
      <Route path="/" component={Home} exact={true} />
      <Route
        path="/about"
        render={props => (
          <div>
            <Members />
            <History />
          </div>
        )}
      />
      <Route path="/customers" component={Customers} exact={true} />
      <Route path="/email" component={Appt} exact={true} />
      <Route path="/calendar" component={CalendarCom} exact={true} />
      <Route path="/upgrade_info" component={UpgradeInfo} exact={true} />
      <Route
        path="/upgrade_packages"
        component={UpgradePackages}
        exact={true}
      />
      <Footer id="footCom" />
    </Fragment>
  </Router>
);

export default App;
