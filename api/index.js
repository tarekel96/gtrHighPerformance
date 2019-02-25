const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.json({
    test: "route hit"
  });
});

module.exports = apiRouter;
