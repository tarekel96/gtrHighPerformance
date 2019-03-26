import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./chris.css";

class Chris extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: `Chris Balster`,
      id: 4,
      title: `Technician/Installer`,
      background: `Universal Technical Institute graduate, 2005. Ford FACT graduate, 2006. A.S.E. certified Master Mechanic, A1 Engine Repair, A2 Automatic Transmission, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Brakes, A6 Electronic Systems, A7 Heating & Air Conditioning, A8 Engine Performance.`,
      hobbies: `Fishing.`,
      food: `Vietnamese Food.`,
      rides: [`93 Ford F-350 460 Big Block`, `Ford Explorer`, `Toyota Truck`]
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
          <Card.Img variant="top" src={"assets/images/Chris.jpg"} />
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

export default Chris;
