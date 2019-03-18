import React, { Component } from "react";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

class CalendarCom extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(0, "days")),
        title: "Some title"
      }
    ]
  };
  constructor(...props) {
    super(...props);

    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(0, "days")),
          title: "Some title",
          resourceId: 1
        }
      ]
    };
  }

  handleSelect = ({ start, end, id }) => {
    const title = window.prompt("New Event Name");
    if (title) {
      this.setState({
        events: [
          ...this.state.events, // ... allows for us to create multiple events
          {
            start,
            end,
            title,
            resourceId: 1
          }
        ]
      });
    }
  };

  render() {
    return (
      <div id="calCon">
        <BigCalendar
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          id="cal"
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          // resources={this.state.events}
          // resourceIdAccessor={this.state.events.resourceId}
        />
      </div>
    );
  }
}

export default CalendarCom;
