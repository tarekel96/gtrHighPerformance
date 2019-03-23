import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import "./cai.css";

class CAI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cold Air Induction Kits",
      id: 1,
      render: false,
      img: "assets/images/CAI_Cropped.jpg",
      info:
        "GTR carries a full line of various brand cold air induction and intake kits for late-model Mustangs. From simple, yet effective, no-frills intake kits to chrome-plated or carbon-fiber induction kits with custom programed computer tuners. Adding a cold air intake will improve power output and also render improved fuel mileage--you get the best of both worlds! Cold air kits are one of the most popular upgrades we offer because they flat-out work! Best of all, most cold air kits can be installed in as little as 20 minutes with basic tools and many are 50 state smog-legal. Put this on the top of your list if more power is what you are after. Contact GTR to help choose which cold air intake is right for your Mustang!",
      benefits: [
        "Improves horsepower and torque output between 7-25 HP (depending on application)",
        "Improves gas mileage due to increased efficiency of engine",
        "Inlcudes re-usable, high-flow, lifetime air filter."
      ]
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ render: !prevState.render }));
  };

  render() {
    return (
      <main id="cai-main">
        <Container fluid>
          <Row className="cai-row">
            <Col lg={9}>
              <Jumbotron className="cai-jumbo">
                <h2>{this.state.name}</h2>

                <div className="cai-images-div">
                  <Image src={this.state.img} className="cai-images" />
                </div>

                <div className="cai-benefits-div" key={this.state.id}>
                  <h3>Benefits: </h3>

                  <ul>
                    {this.state.benefits.map(benefit => (
                      <li>{benefit}</li>
                    ))}
                  </ul>
                  {this.state.render && (
                    <p className="cai-info">{this.state.info}</p>
                  )}
                </div>
                <div className="cai-button-div">
                  <Button onClick={this.handleClick}>More Info</Button>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default CAI;
