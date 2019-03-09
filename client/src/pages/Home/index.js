import React, { Component } from "react";
import threeMuscle from "../../images/threeMuscle.jpg";
import "./home.css";
class Home extends Component {
  state = {};
  render() {
    const homeWelcome = [
      { phrase: "Welcome to ", id: 1 },
      { phrase: " GTR High ", id: 2 },
      { phrase: " Performance", id: 3 }
    ];
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
        {/* <Navbar /> */}
        <div id="homeWelcome">
          {homeWelcome.map(word => {
            return <h1 key={word.id}>{word.phrase}</h1>;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
