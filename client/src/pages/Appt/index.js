import React, { Component } from "react";

class Appt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navList = [
      `First Name, Last Name, Date, Time, Make, Model, Model Year, Speciality`
    ];

    const formList = [
      {
        name: `First Name`,
        type: `text`,
        value: "First Name"
      },
      {
        name: `Last Name`,
        type: `text`,
        value: "Last Name"
      },
      {
        name: `Model`,
        type: `text`,
        value: "Model"
      },
      {
        name: `Year`,
        type: `text`,
        value: "Year"
      },
      {
        name: `Service`,
        type: `text`,
        value: "Service"
      }
    ];
    return (
      <div>
        <h1>Hello</h1>
        {/* {navList.map(navItem => {
          <h3>{navItem}</h3>;
        })} */}
        <form>
          {formList.map(formItem => (
            <input
              name={formItem.name}
              type={formItem.type}
              value={formItem.value}
            />
          ))}
        </form>
        {/* <nav>
          <ul>
            {navList.map(navItem => (
              <li>
                <a href="#">{navItem}</a>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    );
  }
}

export default Appt;
