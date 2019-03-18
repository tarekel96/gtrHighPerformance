// import request from "superagent";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

// // console.log(process.env.REACT_APP_API_KEY);
// // console.log(process.env.REACT_APP_CALENDAR_ID);

// export function getEvents(callback) {
//   request.get(url).end((err, resp) => {
//     if (!err) {
//       const events = [];
//       JSON.parse(resp.text).items.map(event => {
//         events.push({
//           start: event.start.date || event.start.dateTime,
//           end: event.end.date || event.end.dateTime,
//           title: event.summary
//         });
//       });
//       callback(events);
//     }
//   });
// }
