import React, { Component } from "react";
import moment from "moment";
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const localizer = Calendar.momentLocalizer(moment);

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

  handleSelect(start, end) {
    const title = window.prompt("New Event Name");
    if (title) {
      this.setState({
        events: [
          this.state.events,
          {
            start,
            end,
            title
          }
        ]
      });
    }
  }

  render() {
    return (
      <div id="calCon">
        <Calendar
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          id="cal"
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CalendarCom;
