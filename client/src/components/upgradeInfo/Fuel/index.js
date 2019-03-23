import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import "./fuel.css";

class Fuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Fuel System Upgrades",
      id: 8,
      render: false,
      img: "assets/images/CAI_Cropped.jpg",
      info:
        "Everybody knows that you can't make horsepower without fuel...it really is that simple. GTR High Performance carries a wide assortment of fuel system components to feed your beast. From high flow fuel pumps, to larger capacity fuel injectors to adjustable fuel pressure regulators to help fine-tune your Mustang's fuel demands, GTR has you covered. Not sure exactly how much fuel flow is required to optimize your current or future modifications, call us and put our vast experience to use. Having tested and installed virtually every fuel system upgrade on the market, we know what works best on Mustangs.",
      benefits: [
        "High flow fuel components support elevated horsepower levels",
        "High capacity fuel components prevent engine-destroying detonation",
        "Majority of items available in direct-replacement, bolt-on parts"
      ]
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ render: !prevState.render }));
  };
  render() {
    return (
      <main id="fuel-main">
        <Container fluid>
          <Row className="fuel-row">
            <Col lg={9}>
              <Jumbotron className="fuel-jumbo">
                <h2>{this.state.name}</h2>

                <div className="fuel-images-div">
                  <Image src={this.state.img} className="fuel-images" />
                </div>

                <div className="fuel-benefits-div" key={this.state.id}>
                  <h3>Benefits: </h3>

                  <ul>
                    {this.state.benefits.map(benefit => (
                      <li>{benefit}</li>
                    ))}
                  </ul>
                  {this.state.render && (
                    <p className="fuel-info">{this.state.info}</p>
                  )}
                </div>
                <div className="fuel-button-div">
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

export default Fuel;
