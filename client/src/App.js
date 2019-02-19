import React from "react";
import "./css/App.css";
import { Container, Col, Row } from "react-bootstrap";
import Navs from "./components/Navbar/Navs";
import Gtr from "./pages/GtrHigh";

const App = () => (
  <div>
    <Navs />
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>
          <Gtr />
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    ;
  </div>
);

export default App;
