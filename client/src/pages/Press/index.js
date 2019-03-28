import React, { Component } from "react";
import { Container } from "react-bootstrap";
import YelpOne from "../../components/Press/YelpOne/index.js";
// import axios from "axios";

class Press extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "GTR High Performance",
      cards: [{}, {}, {}],
      users: [{}, {}, {}]
    };
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.yelp.com/embed/widgets.js");
    document.body.appendChild(script);
  }
  // componentWillMount() {
  //   const yelp_api = process.env.REACT_APP_YELP_API;
  //   axios
  //     .get(
  //       // "https://api.yelp.com/v3/businesses/search",
  //       "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/gtr-high-performance-rancho-cucamonga/reviews",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${yelp_api}`
  //         }
  //       }
  //     )
  //     // .then(response => console.log(response));
  //     .then(response => {
  //       // console.log(response);
  //       // console.log(response.data.reviews.map(review => review));
  //       const yelpData = response.data.reviews.map(review => review);
  //       const usersData = response.data.reviews.map(review => review.user);
  //       // console.log(response.data.reviews.map(review => review.text[0]));
  //       // const review_first = response.data.reviews.map(
  //       //   review => review.text[0]
  //       // );
  //       this.setState({
  //         cards: yelpData,
  //         users: usersData
  //       });
  //       console.log(yelpData);
  //       console.log(usersData);
  //     });
  // }

  render() {
    return (
      <div>
        <Container fluid>
          <YelpOne />
        </Container>
      </div>
    );
  }
}

export default Press;
/* {this.state.cards.map(card => (
              <Col key={card.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <Image
                        src={
                          "assets/images/yelp_stars/web_and_ios/small/small_5@3x.png"
                        }
                      />
                      {card.time_created}
                    </Card.Subtitle>
                    <Image src={this.state.users.image_url} />
                    {this.state.users.map(user => (
                      <Image src={user.image_url} />
                    ))}
                    <Card.Text>{card.text}</Card.Text>
              
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))} */
