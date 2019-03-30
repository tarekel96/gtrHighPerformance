import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./gonz.css";

class Gonz extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: `Gonzalo Topete`,
      id: 1,
      title: `President and Co-Founder of GTR High`,
      background: `Bachelor of Science Business Administration, University of California, Riverside, 1997.`,
      hobbies: `Microsoft X-Box & sports.`,
      food: `Anything his wife, Lauri, makes.`,
      rides: [
        `2006 Mustang GT Vortech Intercooled Supercharged (465 RWHP)`,
        `1989 Mustang 5.0 LX, 1999 Camaro Z-28 (Yes, a Camaro?!)`,
        `2007 Tahoe`
      ],
      show: false
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
          <Card.Img variant="top" src={"assets/images/Gonz.jpeg"} />
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

export default Gonz;
