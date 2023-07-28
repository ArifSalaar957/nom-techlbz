const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const contactRouter = require("./routes/contact");
const creds = require("./config");

mongoose.connect(creds.MONGODB_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongodb connection error: "));
db.once("open", function () {
  console.log("Mongodb Connected successfully");

  app.use(cors());

  app.use(express.json());

  app.use("/api/contact", contactRouter);

  app.listen(port, () => console.log(`Listening on port ${port}`));
});
