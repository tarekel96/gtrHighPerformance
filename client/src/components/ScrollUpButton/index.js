import React, { Component } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Navbar } from "react-bootstrap";
import "./scroll-up-button.css";

class ScrollUpButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" className="nav-up-icon">
        <FaChevronUp className="up-icon" />
      </Navbar>
    );
  }
}

export default ScrollUpButton;
