import React, { Component } from "react";
import { Container, Col, Row, Button, Image, Card } from "react-bootstrap";
import Shelby from "../../images/RedStang.jpeg";
import { FaFacebook, FaYelp } from "react-icons/fa";
import axios from "axios";
// import { LinkContainer } from "react-router-bootstrap";
// import threeMuscle from "../../images/threeMuscle.jpg";
import "./home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "GTR High Performance",
      review_one: "",
      review_two: "",
      review_three: "",
      cards: [{}, {}, {}]
    };
    this.handleScroll = this.handleScroll.bind.this;
    // this.getYelp = this.getYelp.bind.this;
  }

  handleScroll() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    const yelp_api = process.env.REACT_APP_YELP_API;
    axios
      .get(
        // "https://api.yelp.com/v3/businesses/search",
        "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/gtr-high-performance-rancho-cucamonga/reviews",
        {
          headers: {
            Authorization: `Bearer ${yelp_api}`
          }
        }
      )
      // .then(response => console.log(response));
      .then(response => {
        // console.log(response);
        // console.log(response.data.reviews.map(review => review));
        const yelpData = response.data.reviews.map(review => review);
        // console.log(response.data.reviews.map(review => review.text[0]));
        // const review_first = response.data.reviews.map(
        //   review => review.text[0]
        // );
        this.setState({
          cards: yelpData
        });
        console.log(yelpData);
      });
  }

  render() {
    // const buttons = [
    //   { name: "About", id: 1, link: "/about" },
    //   { name: "Services", id: 2, link: "/services" },
    //   { name: "Contact", id: 3, link: "/email" }
    // ];

    return (
      <main>
        <Container fluid id="home-con">
          <Row id="home-row">
            <Col
              lg="12"
              id="home-col"
              style={{
                backgroundColor: "white",
                backgroundImage: `url(${Shelby})`,
                height: "400px",
                backgroundPosition: "center",
                backgroundRepeat: "none",
                backgroundSize: "cover"
              }}
            />
          </Row>
          <Row id="home-row-two">
            <Col className="home-low-left-col" xs="12" md="8" lg="3">
              <div>
                <h2>About</h2>
                <section style={{ textAlign: "justify" }}>
                  Founded in 1997, GTR High Performance was created by two
                  long-time Mustang enthusiasts, Gonzalo & Ricardo Topete. The
                  concept was simple: to create a positive and rewarding Mustang
                  shop experience. With a courteous, professional, and
                  knowledgeable staff, GTR High Performance has emerged as one
                  of the premier Mustang performance shops in the country.
                </section>

                <Button id="home-button-learn" href="/about">
                  Learn More
                </Button>

                <h5 id="home-checkout-social">
                  Don't forget to checkout Yelp and follow our Socials!
                </h5>
                <div>
                  <Container fluid>
                    <Row id="home-row-icons">
                      <Col>
                        <a
                          href="https://www.facebook.com/GTR-High-Performance-100816169990212/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#3b5998" }}
                        >
                          <FaFacebook className="home-icons" />
                        </a>
                      </Col>
                      <Col>
                        <a
                          href="https://www.instagram.com/explore/locations/310905761/gtr-high-performance?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            className="home-icons"
                            src={"assets/images/instagram-logo.png"}
                          />
                        </a>
                      </Col>
                      <Col>
                        <a
                          href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#c41200" }}
                        >
                          <FaYelp className="home-icons" />
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Col>
            <Col className="home-low-right-col" xs="12" md="4" lg="6">
              <div>
                <h2>Feed</h2>
                {this.state.cards.map(card => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{this.state.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {card.text}
                      </Card.Subtitle>
                      <Card.Text />
                      {/* <Button>Test</Button> */}
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                ))}
                {/* <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>GTR High Performance</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>{this.state.text}</Card.Text>
                    <Button>Test</Button>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card> */}

                {/* <ul className="home-contact-no-bullet">
                  <li>
                    <strong>Tech-Line 1: </strong> (909)-987-4386
                  </li>
                  <li>
                    <strong>Tech Line 2: </strong> (909)-466-5993
                  </li>
                  <li>
                    <strong>Fax:</strong> (909)-466-5981
                  </li>
                  <li>
                    <strong>Email:</strong> info@gtrhipo.com
                  </li>
                  <li>
                    <strong>Order Line:</strong> 1.888.HIPOGTR
                  </li>
                </ul>
                <h4>Hours of Operations</h4>
                <ul className="home-contact-no-bullet">
                  <li>
                    <strong> Mon-Fri:</strong> 9:00 a.m. - 6:30 p.m.
                  </li>
                  <li>
                    <strong> Sat:</strong> 9:00 a.m. - 2:30 p.m.
                  </li>
                  <li>
                    <strong> Sun:</strong> Closed
                  </li>
                </ul>

                <h4>Adress</h4>

                <p>8678 Utica Ave, Rancho Cucamonga, CA 91730 </p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Home;
