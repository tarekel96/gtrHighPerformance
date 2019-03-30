import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./eli.css";

class Eli extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: `Elisseos Patronas`,
      id: 3,
      title: `Sales Associate/ Customer Service / Installer`,
      background: `Started with GTR in 2002. In charge of shipping/receiving, fulfilling sales orders and parts sales in store. Eli ensures that your orders arrives accurately and promptly. Eli lends a hand in the shop and installs parts on a regular basis. Eli's hands-on experience is an advantage to you, our customer.`,
      hobbies: `Family, skateboarding, gym.`,
      food: `Gyros, lowfat yogurt & cottage cheese.`,
      rides: [
        `2000 Mustang GT Paxton Intercooled Supercharged`,
        `94 Mustang GT`,
        `99 Mustang GT`,
        `2000 Mustang GT (current)`,
        `He has so many speeding tickets, we call him "Ticket-Master".`
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
          <Card.Img variant="top" src={"assets/images/Eli.jpg"} />
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
            <ul>
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

export default Eli;
