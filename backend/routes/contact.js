const express = require("express");
let router = express.Router();
const nodemailer = require("nodemailer");
const creds = require("../config");
const { success, error, validation } = require("../utils/responseApi");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
});
transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully signed into Gmail account");
  }
});

router.post("/send-message", async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  if (!name || name == "") {
    res.status(422).json(validation("name is required"));
  } else if (!email || email == "") {
    res.status(422).json(validation("email is required"));
  } else if (!phone || phone == "") {
    res.status(422).json(validation("phone is required"));
  } else if (!company || company == "") {
    res.status(422).json(validation("company is required"));
  } else if (!message || message == "") {
    res.status(422).json(validation("message is required"));
  } else {
    var mail = {
      from: name,
      to: creds.USER,
      subject: "Contact Us Message",
      html:
        `Name: ${name} <br>Email: ${email} <br>Phone: ${phone} <br>Company: ${company} <br> <br>${message}` +
        "<br><br>Kindly,<br>" +
        `${name}`,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res
          .status(500)
          .json(
            error(
              err.message ? err.message : "Something went wrong.",
              res.statusCode
            )
          );
      } else {
        res
          .status(200)
          .json(success("Message sent succefully!", res.statusCode, {}));
      }
    });
  }
});

module.exports = router;
