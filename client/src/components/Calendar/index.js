import React, { Component } from "react";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import { Modal, Button } from "react-bootstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

class CalendarCom extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(0, "days")),
          title: "Some title"
        }
      ],
      show: false
    };
  }

  // handleSelect = ({ start, end, id }) => {
  //   const title = window.prompt("New Event Name");
  //   if (title) {
  //     this.setState({
  //       events: [
  //         ...this.state.events, // ... allows for us to create multiple events
  //         {
  //           start,
  //           end,
  //           title,
  //           resourceId: 1
  //         }
  //       ]
  //     });
  //   }
  // };

  handleSelect = ({ start, end }) => {
    this.setState({
      show: !this.state.show
    });
    console.log(this.state.events);
  };

  // closeModal = () => {
  //   const newEvent = {
  //     title: document.getElementById('event-title').value
  //   }
  //   if(title) {
  //     this.setState((state) => {
  //       return {
  //         events: this.state.events.push(newEvent)
  //       };
  //   }
  // }};

  saveEvent = ({ slotInfo }) => {};

  render() {
    return (
      <div id="calCon">
        <BigCalendar
          accessor
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
        {/* <EventModal show={false} /> */}
        <Modal className="event-modal" show={this.state.show}>
          <Modal.Header closeButton>New Event</Modal.Header>

          <Modal.Body>
            <form>
              Event Title
              <input id="event-title" type="text" />
              Start
              <input id="event-start" type="text" />
              End
              <input id="event-end" type="text" />
              All day
              <input type="radio" />
              <button variant="secondary" type="submit">
                Save
              </button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// const EventModal = () => {
//   return (
//     <Modal show={this.state.show}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal title</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <p>Modal body text goes here.</p>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary">Close</Button>
//         <Button variant="primary">Save changes</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

export default CalendarCom;
