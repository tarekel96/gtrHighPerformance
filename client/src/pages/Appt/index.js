import React, { Component } from "react";
import "./appt.css";

class Appt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //     const navList = [
    //       `First Name, Last Name, Date, Time, Make, Model, Model Year, Speciality`
    //     ];

    const formList = [
      {
        name: `Name`,
        id: 1,
        type: `text`,
        placeholder: `Name`
      },
      {
        name: `Email`,
        id: 2,
        type: `text`,
        placeholder: `Email`
      },
      {
        name: `Car`,
        id: 3,
        type: `text`,
        placeholder: `Car`
      },
      {
        name: `Model & Trim`,
        id: 4,
        type: `text`,
        placeholder: `Model & Trim`
      },
      {
        name: `Year`,
        id: 5,
        type: `text`,
        placeholder: `Year`
      }
      // {
      //   name: `Service`,
      //   type: `text`
      // }
    ];
    return (
      <main id="form-div">
        <form id="form-block">
          <h3>Message:</h3>
          <div className="form-box">
            {formList.map(formItem => (
              <label key={formItem.id} className="form-label">
                {formItem.name}:
                <input
                  className="form-input"
                  name={formItem.name}
                  type={formItem.type}
                  placeholder={formItem.placeholder}
                />
              </label>
            ))}
          </div>
          <div className="form-box">
            <label className="form-label">
              Service:
              <textarea
                className="form-input"
                name="Service"
                type="text"
                placeholder="Service"
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
      </main>
    );
  }
}

export default Appt;
