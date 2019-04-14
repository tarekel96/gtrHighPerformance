import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class YelpOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!window.doBuild) {
      this.preloadWidgetScript();
    } else {
      window.doBuild();
    }
  }

  preloadWidgetScript = () => {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.pinBuild = "doBuild";
    script.src = "//www.yelp.com/embed/widgets.js";
    document.body.appendChild(script);
  };

  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.setAttribute("src", "https://www.yelp.com/embed/widgets.js");
  //   document.getElementById("root").appendChild(script);
  // }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <span
              className="yelp-review"
              data-review-id="CPZ43GwBDsLfZLaBpDPxFQ"
              data-hostname="www.yelp.com"
            >
              <a
                href="https://www.yelp.com/user_details?userid=nQjhEXRd9n1vON50NZnOCA"
                rel="nofollow noopener"
              >
                Jeff H.
              </a>

              <a
                href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=CPZ43GwBDsLfZLaBpDPxFQ"
                rel="nofollow noopener"
              >
                review
              </a>

              <a
                href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                rel="nofollow noopener"
              >
                GTR High Performance
              </a>
              <a href="https://www.yelp.com" rel="nofollow noopener">
                Yelp
              </a>
            </span>
          </Col>
          <Col>
            <span
              className="yelp-review"
              data-review-id="aUGiGaQinuDPaCJLMvYsrg"
              data-hostname="www.yelp.com"
            >
              <a
                href="https://www.yelp.com/user_details?userid=L74fXuL1VrIsMTBxUO5Kgw"
                rel="nofollow noopener"
              >
                Jordan N.
              </a>

              <a
                href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=aUGiGaQinuDPaCJLMvYsrg"
                rel="nofollow noopener"
              >
                review
              </a>
              <a
                href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                rel="nofollow noopener"
              >
                GTR High Performance
              </a>
              <a href="https://www.yelp.com" rel="nofollow noopener">
                Yelp
              </a>
            </span>
          </Col>
          <Col>
            <span
              className="yelp-review"
              data-review-id="5YjNAfoTU6bBikeKp2R1FQ"
              data-hostname="www.yelp.com"
            >
              <a
                href="https://www.yelp.com/user_details?userid=ZuEiZqe1QFAXhK4IdA2ZcA"
                rel="nofollow noopener"
              >
                Robert-Francis S.
              </a>

              <a
                href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=5YjNAfoTU6bBikeKp2R1FQ"
                rel="nofollow noopener"
              >
                review
              </a>
              <a
                href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                rel="nofollow noopener"
              >
                GTR High Performance
              </a>
              <a href="https://www.yelp.com" rel="nofollow noopener">
                Yelp
              </a>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default YelpOne;
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
