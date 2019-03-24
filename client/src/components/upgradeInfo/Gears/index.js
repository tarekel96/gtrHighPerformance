import React, { Component } from "react";
import { Jumbotron, Image, Button } from "react-bootstrap";
import "./gears.css";

class Gears extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Differential Gears",
      id: 4,
      render: false,
      img: "assets/images/gears.jpg",
      info:
        "By far, one of the most popular modifications for Mustangers to do to their cars. Changing the differential (rear) gears allows much quicker acceleration. Installing performance differential gears allows the rear tires to rotate and spin at a faster rate, thereby accelerating the car faster. Significant drops in 0-60mph and 1/4 mile times will be seen, not to mention the fun-factor will be raised. The most popular gears for Mustangs are 3.55, 3.73, 3.90 and 4.10 gears, although others are available. GTR carries top quality, strong gear sets for V6 and V8 Mustangs along with all the necessary parts that are required for a complete installation, such as: installation kits, bearings, seals, axles, synthetic gear oil, friction modifier, speedometer calibrators, etc...If you are having a tough time figuring out which is the best gear ratio for you car, contact GTR's knowledgeable staff for suggestions.",
      benefits: [
        "Much improved acceleration and passing power",
        "Quicker quarter mile times and reduces lap times in competition",
        "The equivalent in performance as adding 30-40 horsepower"
      ]
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ render: !prevState.render }));
  };
  render() {
    return (
      <main id="gears-main">
        {/* <Container fluid>
          <Row className="gears-row">
            <Col lg={9}> */}
        <Jumbotron className="gears-jumbo">
          <h2>{this.state.name}</h2>

          <div className="gears-images-div">
            <Image src={this.state.img} className="gears-images" />
          </div>

          <div className="gears-benefits-div">
            <h3>Benefits: </h3>

            <ul>
              {this.state.benefits.map(benefit => (
                <li>{benefit}</li>
              ))}
            </ul>
            {this.state.render && (
              <p className="gears-info">{this.state.info}</p>
            )}
          </div>
          <div className="gears-button-div">
            <Button onClick={this.handleClick}>More Info</Button>
          </div>
        </Jumbotron>
        {/* </Col>
          </Row>
        </Container> */}
      </main>
    );
  }
}

export default Gears;
