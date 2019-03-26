import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./ric.css";

class Ric extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: `Ricardo Topete`,
      id: 2,
      title: `Vice-President and Co-Founder of GTR High`,
      background: ` Bachelor of Science Business Administration, University of California, Riverside, 1997. A.S.E Certified: A1 Engine Repair, A8 Engine Performance, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Braking Systems.`,
      hobbies: `Spending time with family, Traveling, Bicycling, Cruising in Mustangs & making horsepower!`,
      food: `Any dead and cooked animal is fair game`,
      rides: [
        `Paxton Supercharged 2001 Mustang GT`,
        `Vortech Supercharged 1994 SVT Cobra (sold)`,
        `1992 Mustang GT (sold)`,
        `1964 1/2 Mustang 289`,
        `2005 Ford F-150 SuperCrew`,
        `2006 Infiniti G35 Coupe`,
        `Ricardo doesn't know the meaning of "factory stock.`
      ]
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Card className="members-cards">
          <Card.Img variant="top" src={"assets/images/Ric.jpg"} />
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>{this.state.title}</Card.Text>
            <Button variant="primary" onClick={this.handleShow}>
              More
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Background: </strong>
              {this.state.background}
            </p>
            <p>
              <strong>Hobbies: </strong>
              {this.state.hobbies}
            </p>
            <p>
              <strong>Favorite Food: </strong>
              {this.state.food}
            </p>
            <strong>Personal Rides:</strong>
            <ul className="member-ride-list">
              {this.state.rides.map(ride => (
                <li>{ride}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Ric;
