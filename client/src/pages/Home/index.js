import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import threeMuscle from "../../images/threeMuscle.jpg";
import "./home.css";
class Home extends Component {
  state = {};
  render() {
    const homeWelcome = ["Welcome to ", " GTR High ", " Performance"];
    return (
      <div
        id="homeCon"
        style={{
          backgroundImage: `url(${threeMuscle})`,
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          backgroundSize: "cover"
        }}
      >
        <Navbar />
        <div id="homeWelcome">
          {homeWelcome.map(word => {
            return <h1>{word}</h1>;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
