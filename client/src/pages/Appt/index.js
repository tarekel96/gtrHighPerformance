import React, { Component } from "react";
import axios from "axios";
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
      },
      {
        name: `model`,
        id: 4,
        type: `text`,
        placeholder: `Model`,
        value: ""
      },
      {
        name: `trim`,
        id: 5,
        type: `text`,
        placeholder: `Trim`,
        value: ""
      },
      {
        name: `year`,
        id: 6,
        type: `text`,
        placeholder: `Year`,
        value: ""
      }
    ];
    return (
      <main id="form-main">
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
                Service:
                <textarea
                  className="form-input"
                  name="service"
                  type="textarea"
                  placeholder="Service"
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
