import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import "./brakes.css";

class Brakes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Performance Brake Upgrades",
      id: 7,
      render: false,
      img: "assets/images/CAI_Cropped.jpg",
      info:
        "GTR understands the need for more horsepower and faster acceleration, but we also understand that having the ability to slow down and stop your Mustang is even MORE important! The Mustang's stock braking system are, in many cases, inadequate for performance driving or heavy-usage. That is why GTR offers all the top name brand manufacturers in the brakes industry. Names such as Baer, Brembo, Powerslot, Hawk Racing, StopTech, etc...all make direct replacement brake parts to give your pony more stopping power. Whether you are looking for a simple, yet effective brake upgrade with brakes pads and replacment rotors, or you want to really take it up a notch or two with a big brake kit, such as those offered by Baer and Brembo, GTR has you covered. GTR can tailer a brake package desgined to fit your needs and budget to ensure you get the best possible combination for your hard-earned dollar. Contact us today and start enjoying greater stopping power and enhanced safety for your Mustang.",
      benefits: [
        "Much improved stopping power for better safety",
        "Easy bolt on brake parts and complete systems available for all Mustangs",
        "Performance brake parts for any budget, need or competition level",
        "Performance brake rotors and calipers give the car a sporty look"
      ]
    };
  }
  render() {
    return (
      <main id="brakes-main">
        <Container fluid>
          <Row className="brakes-row">
            <Col lg={9}>
              <Jumbotron className="brakes-jumbo">
                <h2>{this.state.name}</h2>

                <div className="brakes-images-div">
                  <Image src={this.state.img} className="brakes-images" />
                </div>

                <div className="brakes-benefits-div" key={this.state.id}>
                  <h3>Benefits: </h3>

                  <ul>
                    {this.state.benefits.map(benefit => (
                      <li>{benefit}</li>
                    ))}
                  </ul>
                  {this.state.render && (
                    <p className="brakes-info">{this.state.info}</p>
                  )}
                </div>
                <div className="brakes-button-div">
                  <Button>More Info</Button>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Brakes;
