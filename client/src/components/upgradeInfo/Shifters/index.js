import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import "./shifters.css";

class Shifters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Short-Throw Racing Shifters",
      id: 5,
      render: false,
      img: "assets/images/shifter.jpg",
      info: [
        "One of the biggest complaints among Mustang enthusiasts is the factory stock shifter. In stock form, it feels vague, rubbery and the throws into gear are long and innacurate. Ever tried speed-shifting from 2nd to 3rd gear and not been able to hit the target? Or wost, end up losing a race because of the missed shift? If so, a short throw racing shifter is just what your Mustang's manual transmission needs. GTR carries several different brand of industry-leading short throw racing shifters to suit your needs and budget. All of them, including the value-minded shifters will be much stronger than the wimpy stock piece and offer more precise, accurate and shorter throws to help get your Stang in gear faster. Think about it: the less time you spend in between gears, the faster the car will accelerate! Short throw racing shifters are one of those rare upgrades that will have you wondering how you ever drove or raced your Mustang with the stock shifter. It truly changes the whole driving experience and rewards you with crisp, quick shifts. Contact a GTR representative for help in selecting a shifter that works for your pony."
      ],
      benefits: [
        "Increased durability and strength.",
        "Quick, accurate shifts--No more missed shifts!",
        "Affordable upgrade and easy installation in about an hour"
      ]
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ render: !prevState.render }));
  };
  render() {
    return (
      <main id="shifters-main">
        <Container fluid>
          <Row className="shifters-row">
            <Col lg={9}>
              <Jumbotron className="shifters-jumbo">
                <h2>{this.state.name}</h2>

                <div className="shifters-images-div">
                  <Image src={this.state.img} className="shifters-images" />
                </div>

                <div className="shifters-benefits-div">
                  <h3>Benefits: </h3>

                  <ul>
                    {this.state.benefits.map(benefit => (
                      <li>{benefit}</li>
                    ))}
                  </ul>
                  {this.state.render && (
                    <p className="shifters-info">{this.state.info}</p>
                  )}
                </div>
                <div className="shifters-button-div">
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

export default Shifters;
