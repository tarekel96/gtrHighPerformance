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
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Navbar
        id="homeNavBar"
        collapseOnSelect
        expand="lg"

        // variant="dark"
      >
        <Navbar.Brand href="/">
          <LinkContainer to="/" exact={true}>
            <img src={gtrLogo} alt="Home" onClick={this.handleScroll} />
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* mr-auto classname keeps nav to left */}
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Nav.Link
                href="/about"
                className="nav-black"
                onClick={this.handleScroll}
              >
                About
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/customers" exact={true}>
              <Nav.Link
                href="/customers"
                className="nav-black"
                onClick={this.handleScroll}
              >
                Press
              </Nav.Link>
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
              className="nav-black"
            >
              <LinkContainer to="/upgrade_info" exact={true}>
                <NavDropdown.Item
                  to="/upgrade_info"
                  className="nav-black"
                  onClick={this.handleScroll}
                >
                  Upgrades Explained
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/upgrade_packages" exact={true}>
                <NavDropdown.Item
                  href="/upgrade_packages"
                  className="nav-black"
                  onClick={this.handleScroll}
                >
                  Upgrade Packages
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/catalog" exact={true}>
                <NavDropdown.Item href="/catalog" onClick={this.handleScroll}>
                  Catalog
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>

          <Nav>
            <NavLink href="/cart" className="icons" onClick={this.handleScroll}>
              <FiShoppingCart />
            </NavLink>
            <Nav.Link
              href="/cart"
              className="wordIcons nav-black"
              onClick={this.handleScroll}
            >
              Cart
            </Nav.Link>

            <LinkContainer to={"/calendar"} exact={true}>
              <Nav.Link
                to="/calendar"
                className="icons"
                onClick={this.handleScroll}
              >
                <GoCalendar id="cal" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/calendar"} exact={true}>
              <Nav.Link
                to="/calendar"
                className="wordIcons nav-black"
                onClick={this.handleScroll}
              >
                Calendar
              </Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to={"/email"} exact={true}> */}
            <Nav.Link
              className="icons"
              href="mailto:info@gtrhipo.com"
              // onClick={this.handleScroll}
            >
              <FaEnvelope />
            </Nav.Link>
            {/* </LinkContainer> */}
            {/* <LinkContainer to={"/email"} exact={true}> */}
            <Nav.Link
              className="wordIcons nav-black"
              href="mailto:info@gtrhipo.com"
              // onClick={this.handleScroll}
            >
              Email
            </Nav.Link>
            {/* </LinkContainer> */}

            <Nav.Link
              href="#memes"
              className="nav-black"
              onClick={this.handleScroll}
            >
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
