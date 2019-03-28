import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class YelpOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.yelp.com/embed/widgets.js");
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <span
              class="yelp-review"
              data-review-id="353VwAL_oGMv_6N-DCrVtA"
              data-hostname="www.yelp.com"
            >
              Read
              <a
                href="https://www.yelp.com/user_details?userid=IoBhAxAxelNooJ3ySt26ug"
                rel="nofollow noopener"
              >
                Moses B.
              </a>
              's
              <a
                href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=353VwAL_oGMv_6N-DCrVtA"
                rel="nofollow noopener"
              >
                review
              </a>
              of
              <a
                href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                rel="nofollow noopener"
              >
                GTR High Performance
              </a>
              on
              <a href="https://www.yelp.com" rel="nofollow noopener">
                Yelp
              </a>
            </span>
          </Col>
          <Col>
            <span
              class="yelp-review"
              data-review-id="CE0YQ8HtKTmP8GEIxavpiQ"
              data-hostname="www.yelp.com"
            >
              Read{" "}
              <a
                href="https://www.yelp.com/user_details?userid=dh4BdQL-2Glxg9-yOrPc8w"
                rel="nofollow noopener"
              >
                Nathaniel S.
              </a>
              's{" "}
              <a
                href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=CE0YQ8HtKTmP8GEIxavpiQ"
                rel="nofollow noopener"
              >
                review
              </a>{" "}
              of{" "}
              <a
                href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                rel="nofollow noopener"
              >
                GTR High Performance
              </a>{" "}
              on{" "}
              <a href="https://www.yelp.com" rel="nofollow noopener">
                Yelp
              </a>
            </span>
          </Col>
          <Col>
            <span
              class="yelp-review"
              data-review-id="5YjNAfoTU6bBikeKp2R1FQ"
              data-hostname="www.yelp.com"
            >
              Read{" "}
              <a
                href="https://www.yelp.com/user_details?userid=ZuEiZqe1QFAXhK4IdA2ZcA"
                rel="nofollow noopener"
              >
                Robert-Francis S.
              </a>
              's{" "}
              <a
                href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=5YjNAfoTU6bBikeKp2R1FQ"
                rel="nofollow noopener"
              >
                review
              </a>{" "}
              of{" "}
              <a
                href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                rel="nofollow noopener"
              >
                GTR High Performance
              </a>{" "}
              on{" "}
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
