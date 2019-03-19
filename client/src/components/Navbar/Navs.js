import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import gtrLogo from "../../images/gtrLogo.png";
// import { GiHomeGarage } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import "./nav.css";
import NavLink from "react-bootstrap/NavLink";

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
        <Navbar.Brand href="/">
          <LinkContainer to="/" exact={true}>
            <img src={gtrLogo} alt="Home" />
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* mr-auto classname keeps nav to left */}
          <Nav className="mr-auto">
            <LinkContainer to="/about" exact={true}>
              <Nav.Link href="/about">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/press" exact={true}>
              <Nav.Link href="/press">Press</Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="Press" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/press" eventKey={7}>
                GTR Press
              </NavDropdown.Item>
              <NavDropdown.Item href="/photos" eventKey={8}>
                Customer Photos
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown
              title="Products & Services"
              id="collasible-nav-dropdown"
            >
              <LinkContainer to="/catalog" exact={true}>
                <NavDropdown.Item href="/catalog">Catalog</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/upgrade_packages" exact={true}>
                <NavDropdown.Item href="/upgrade_packages">
                  Upgrade Packages
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/upgrade_info" exact={true}>
                <NavDropdown.Item to="/upgrade_info">
                  Upgrades Explained
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>

          <Nav>
            <NavLink href="/cart" className="icons">
              <FiShoppingCart />
            </NavLink>
            <Nav.Link href="/cart" className="wordIcons">
              Cart
            </Nav.Link>

            <LinkContainer to={"/calendar"} exact={true}>
              <Nav.Link to="/calendar" className="icons">
                <GoCalendar id="cal" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/calendar"} exact={true}>
              <Nav.Link to="/calendar" className="wordIcons">
                Calendar
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/email"} exact={true}>
              <Nav.Link className="icons" to="/email">
                <FaEnvelope />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/email"} exact={true}>
              <Nav.Link className="wordIcons" to="/email">
                Email
              </Nav.Link>
            </LinkContainer>

            <Nav.Link href="#memes">More</Nav.Link>
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
