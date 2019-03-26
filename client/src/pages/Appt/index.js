import React, { Component } from "react";
import axios from "axios";
// import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import "./appt.css";

class Appt extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      car: "",
      model: "",
      trim: "",
      year: "",
      service: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, car, model, trim, year, service } = this.state;

    await axios.post("/api/form", {
      name,
      email,
      car,
      model,
      trim,
      year,
      service
    });
    // return form;
  }

  render() {
    const formList = [
      {
        name: `name`,
        id: 1,
        type: `text`,
        placeholder: `Name`,
        value: ""
      },
      {
        name: `email`,
        id: 2,
        type: `text`,
        placeholder: `Email`,
        value: ""
      },
      {
        name: `car`,
        id: 3,
        type: `text`,
        placeholder: `Car`,
        value: ""
      }
      // {
      //   name: `model`,
      //   id: 4,
      //   type: `text`,
      //   placeholder: `Model`,
      //   value: ""
      // },
      // {
      //   name: `trim`,
      //   id: 5,
      //   type: `text`,
      //   placeholder: `Trim`,
      //   value: ""
      // },
      // {
      //   name: `year`,
      //   id: 4,
      //   type: `text`,
      //   placeholder: `Year`,
      //   value: ""
      // }
    ];
    return (
      <main id="form-main">
        {/* <Container id="contact-con">
          <Row id="contact-row">
            <Col lg={8} id="contact-col">
              <Jumbotron id="contact-jumbo">
                <div id="contact-jumbo-div">
                  <h3>Contact</h3>
                  <ul className="contact-no-bull">
                    <li>
                      <strong>Tech-Line 1: </strong>(909)-987-4386
                    </li>
                    <li>
                      <strong>Tech Line 2: </strong>(909)-466-5993
                    </li>
                    <li>
                      <strong>Fax:</strong> (909)-466-5981
                    </li>
                    <li>
                      <strong>Order Line:</strong> 1.888.HIPOGTR
                    </li>
                  </ul>

                  <h3>Adress</h3>

                  <p>8678 Utica Ave., Rancho Cucamonga, CA 91730 </p>

                  <h3>Hours of Operations</h3>
                  <ul className="contact-no-bull">
                    <li>
                      <strong> Mon-Fri:</strong> 9:00 a.m. - 6:30 p.m.
                    </li>
                    <li>
                      <strong> Sat:</strong>9:00 a.m. - 2:30 p.m.
                    </li>
                    <li>
                      <strong> Sun:</strong>Closed
                    </li>
                  </ul>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Container> */}
        <div id="form-div">
          <form id="form-block" onSubmit={this.handleSubmit}>
            <h3>Message:</h3>
            <div className="form-box">
              {formList.map(formItem => (
                <label
                  htmlFor={formItem.name}
                  key={formItem.id}
                  className="form-label"
                >
                  {formItem.placeholder}:
                  <input
                    className="form-input"
                    name={formItem.name}
                    type={formItem.type}
                    placeholder={formItem.placeholder}
                    onChange={this.handleChange}
                  />
                </label>
              ))}
            </div>
            <div className="form-box">
              <label className="form-label">
                Question:
                <textarea
                  className="form-input"
                  name="question"
                  type="textarea"
                  placeholder="Question"
                  onChange={this.handleChange}
                />
              </label>
              <input
                className="form-input"
                id="form-submit"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Appt;
