//server.js
const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const app = express();

const bodyParser = require("body-parser"); // Parses incoming request bodies in a middleware before your handlers, available under the req.body property.
// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, "build")));

// enables bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// testing with Postman
app.get("/test", (req, res) => {
  res.json({
    test: "the route has hit"
  });
});

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.listen(port, () => {
  console.log(`The API server is now running on ${port}`);
});
