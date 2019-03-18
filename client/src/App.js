import React from "react";
import "./css/App.css";
import Nav from "./components/Navbar/Navs.js";
import Home from "./pages/Home/index.js";
import History from "../src/pages/History/History.js";
import Appt from "./pages/Appt/index.js";
import Members from "./pages/Members/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import upgradeInfo from "./pages/upgradeInfo/index.js";
import CalendarCom from "./components/Calendar/index.js";
import Footer from "./components/Footer/index.js";

const App = () => (
  <Router>
    <ScrollToTop>
      <div>
        <Nav />

        <Route path="/" component={Home} />

        <Route path="/members" component={Members} />

        <Route path="/history" render={() => <History component={Members} />} />
        <Route path="/email" component={Appt} />
        <Route path="/calendar" component={CalendarCom} />
        <Route path="/upgrade_info" component={upgradeInfo} />
      </div>
      <Footer />
    </ScrollToTop>
  </Router>
);

export default App;
