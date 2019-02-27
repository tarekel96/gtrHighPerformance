import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiHomeGarage } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import "./nav.css";

class Navs extends Component {
  state = {};
  render() {
    return (
      <Navbar
        id="homeNavBar"
        collapseOnSelect
        expand="lg"
        bg="none"
        // variant="dark"
      >
        <Navbar.Brand href="#home">
          <GiHomeGarage id="homeIcon" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#pricing">About</Nav.Link>

            <NavDropdown
              title="Products & Services"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Catalog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Upgrade Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Upgrades Explained
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Accomplishments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">GTR Press</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Customer Photos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes" />
            <Nav.Link eventKey={2} href="#memes" className="icons">
              <FiShoppingCart />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="wordIcons">
              Cart
            </Nav.Link>
            <Nav.Link href="#deets" className="icons">
              <GoCalendar id="cal" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="wordIcons">
              Calendar
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes" className="icons">
              <FaEnvelope />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="wordIcons">
              Email
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              More
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navs;

// import { Button } from "react-bootstrap/Button";

// const Navs = () => <Button bsStyle="success">Hello</Button>;

// export default Navs;
