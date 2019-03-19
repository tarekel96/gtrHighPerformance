import React, { Component } from "react";
import { Jumbotron, Button, Container, Col, Row } from "react-bootstrap";
import Shelby from "../../images/RedStang.jpeg";
// import threeMuscle from "../../images/threeMuscle.jpg";
import "./home.css";
class Home extends Component {
  state = {};
  render() {
    const buttons = [
      { name: "About", id: 1 },
      { name: "Services", id: 2 },
      { name: "Contact", id: 3 }
    ];
    return (
      <main>
        <Container fluid id="home-con">
          <Row
            id="home-row"
            style={{
              backgroundColor: "white",
              backgroundImage: `url(${Shelby})`,
              height: "700px",
              backgroundPosition: "center",
              backgroundRepeat: "none",
              backgroundSize: "cover"
            }}
          >
            <Col id="home-col" lg={6}>
              <Jumbotron id="home-jumbo">
                <h2>Welcome to GTR High Performance</h2>
                <p>Home of Southern California's Mustang Best Experts</p>
                <div id="home-buttons">
                  {buttons.map(button => (
                    <Button>{button.name}</Button>
                  ))}
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Home;
