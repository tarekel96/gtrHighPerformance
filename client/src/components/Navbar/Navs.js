import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiHomeGarage } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import "./nav.css";

class Navs extends Component {
  state = {};
  render() {
    return (
      <Navbar
        fixed="top"
        id="homeNavBar"
        collapseOnSelect
        expand="lg"
        bg="none"
        // variant="dark"
      >
        <Navbar.Brand href="#home">
          <LinkContainer to="/" exact={true}>
            <GiHomeGarage id="homeIcon" href="/" />
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* mr-auto classname keeps nav to left */}
          <Nav className="mr-auto">
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <LinkContainer to="/history" exact={true}>
                <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/members" exact={true}>
                <NavDropdown.Item href="#action/3.2">Members</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

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

            <Nav.Link eventKey={2} className="icons">
              <LinkContainer exact={true} to="/email">
                <FaEnvelope />
              </LinkContainer>
            </Nav.Link>

            <LinkContainer exact={true} to="/email">
              <Nav.Link eventKey={2} className="wordIcons">
                Email
              </Nav.Link>
            </LinkContainer>

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
