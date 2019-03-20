const express = require("express");
const apiRouter = express.Router();
const nodemailer = require("nodemailer");

apiRouter.get("/", (req, res) => {
  res.json({
    test: "route hit"
  });
});

apiRouter.post("/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message);
    }
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Car: ${req.body.car}</li>
    </ul>
      <h3>Question</h3>
      <p>Description: ${req.body.service}</p>
    `;
    console.log("Credentials obtained, sending message...");

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: `smtp.ethereal.email`,
      port: 587,
      secure: false,
      auth: {
        user: `caterina.price@ethereal.email`,
        pass: `hRsAWGrgvcWvh8Ky2Q`
      }
    });

    // Message object
    let message = {
      from: "test@testaccount.com",
      to: "caterina.price@ethereal.email",
      subject: "GTR Test Email",
      replyTo: "test@testaccount.com",
      text: req.body.service,
      html: htmlEmail
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
      }

      console.log("Message sent: %s", info.message.subject);
      // Preview only available when sending through an Ethereal account
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

module.exports = apiRouter;
