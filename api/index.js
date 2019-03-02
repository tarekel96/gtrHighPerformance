const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.json({
    test: "route hit"
  });
});

apiRouter.post("/form", (req, res) => {
  req.body;
  console.log(req.body);
});

module.exports = apiRouter;
