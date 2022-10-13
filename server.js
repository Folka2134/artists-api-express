const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes/routes");
const Model = require("./model/model");
const { artists } = require("./artists");

// Express setup
const app = express();
const PORT = 4000;
const jsonParser = bodyParser.json();

// MONGODB Setup
require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// Routes
app.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.render("index.ejs", { info: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
