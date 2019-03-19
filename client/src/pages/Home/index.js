import React, { Component } from "react";
import { Jumbotron, Button, Container, Col, Row } from "react-bootstrap";
import Shelby from "../../images/RedStang.jpeg";
// import threeMuscle from "../../images/threeMuscle.jpg";
import "./home.css";
class Home extends Component {
  state = {};
  render() {
    // const homeWelcome = [
    //   { phrase: "Welcome to ", id: 1 },
    //   { phrase: " GTR High ", id: 2 },
    //   { phrase: " Performance", id: 3 }
    // ];
    return (
      <main
      // id="home-con"
      // style={{
      //   backgroundColor: "white",
      //   backgroundImage: `url(${Shelby})`,
      //   height: "700px",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "none",
      //   backgroundSize: "cover"
      // }}
      >
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
                <h3>Welcome to GTR High Performance</h3>
                <p>Home of Southern California's Mustang Best Experts</p>
                <Button>Our Services</Button>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Home;
