require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// database connection

const dbURI = process.env.DBURI;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hi this is home"));
