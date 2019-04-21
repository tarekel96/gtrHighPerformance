import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Featured from "../../components/Customers/Featured/index.js";
import Videos from "../../components/Customers/Videos/index.js";
import Photos from "../../components/Customers/Photos/index.js";
import YelpOne from "../../components/Customers/YelpOne/index.js";
import "./customers.css";
// import axios from "axios";

class Press extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "GTR High Performance",
      cards: [{}, {}, {}],
      users: [{}, {}, {}]
    };
  }
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.setAttribute("src", "https://www.yelp.com/embed/widgets.js");
  //   document.body.appendChild(script);
  // }

  render() {
    return (
      <div>
        <Featured />
        <h2 className="text-center">Customer Dyno Videos</h2>
        <Videos />
        <h2 className="text-center">Galleries</h2>
        <Container fluid>
          <Photos />
          <h2 id="customers-testimonials">Testimonials</h2>
          <YelpOne />
        </Container>
      </div>
    );
  }
}

export default Press;
