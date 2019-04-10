import React from "react";
import { Card } from "react-bootstrap";

const Card = () => {
  return (
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
  );
};
