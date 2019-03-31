import React, { Component } from "react";
import { Container } from "react-bootstrap";
import YelpOne from "../../components/Customers/YelpOne/index.js";
import Footer from "../../components/Footer/index.js";
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
  componentDidMount() {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.yelp.com/embed/widgets.js");
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <Container fluid>
          <h2 id="customers-testimonials">Testimonials</h2>
          <YelpOne />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Press;
