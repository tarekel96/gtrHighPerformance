import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class Navs extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <NavDropdown
              title="Products & Services"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Catalog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Upgrade Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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
            <Nav.Link href="#deets">Events</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
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
