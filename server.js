// declare variables
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8888;
const mongoose = require("mongoose");
const MupaTerm = require("./models/mupaTerm");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongoDB via mongoose
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
  console.log("Connected to database");
});

app.get("/", async (req, res) => {
  res.render("explanation.ejs");
});

app.get("/game", async (req, res) => {
  let rightGuess;
  let rightTerm;
  let rightDescription;
  let rightGuessArray;
  try {
    rightGuess = await MupaTerm.aggregate([{ $sample: { size: 1 } }]);
    rightTerm = rightGuess[0].term
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    rightDescription = rightGuess[0].description;

    res.render("index.ejs", { rightGuess, rightTerm, rightDescription });
    console.log(rightGuess);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// initiatize server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
