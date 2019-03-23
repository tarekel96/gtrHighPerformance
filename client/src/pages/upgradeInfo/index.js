import React, { Component } from "react";
// import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import "./upgrade.css";
import CAI from "../../components/upgradeInfo/CAI/index.js";
import Exhaust from "../../components/upgradeInfo/Exhaust/index.js";
import Suspension from "../../components/upgradeInfo/Suspension/index.js";
import Gears from "../../components/upgradeInfo/Gears/index.js";
import Shifters from "../../components/upgradeInfo/Shifters/index.js";
import Pulleys from "../../components/upgradeInfo/Pulleys/index.js";
import Brakes from "../../components/upgradeInfo/Brakes/index.js";
import Fuel from "../../components/upgradeInfo/Fuel/index.js";
import Cooling from "../../components/upgradeInfo/Cooling/index.js";

class upgradeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="exp-main">
        <CAI />
        <Exhaust />
        <Suspension />
        <Gears />
        <Shifters />
        <Pulleys />
        <Brakes />
        <Fuel />
        <Cooling />
        {/* <Container fluid>
          {this.state.items.map(item => (
            <Row className="exp-row">
              <Col lg={9}>
                <Jumbotron className="exp-jumbo">
                  <h2>{item.name}</h2>

                  <div className="exp-images-div">
                    <Image src={item.img} className="exp-images" />
                  </div>

                  <div className="exp-benefits-div" key={item.id}>
                    <h3>Benefits: </h3>

                    <ul>
                      {item.benefits.map(benefit => (
                        <li>{benefit}</li>
                      ))}
                    </ul>
                    {item.render && <p className="exp-info">{item.info}</p>}
                  </div>
                  <div className="exp-button-div">
                    <Button>More Info</Button>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          ))}
        </Container> */}
      </main>
    );
  }
}

export default upgradeInfo;
