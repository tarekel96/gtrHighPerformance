import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./dave.css";

class Dave extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: `Dave Chamberlain`,
      id: 5,
      title: `Technician/Installer`,
      background: `Started with GTR in 2006. Specializes in 5.0 Mustangs and truck performance. Was owner/operator of Dave's Custom Motorsports (Upland, Ca) 1992-1996.`,
      hobbies: `Las Vegas and sleeping.`,
      food: `Chili cheese fries at The Hat.`,
      rides: [
        `06 Chrysler 300C SRT8`,
        `96 Chevy Impala SS`,
        `04 Chevy Truck 2500`,
        `1986 Mustang GT (previous)`,
        `1989 Mustang 5.0. (previous)`
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
          <Card.Img variant="top" src={"assets/images/Dave.jpg"} />
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

export default Dave;
