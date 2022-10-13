const express = require("express");
const mongoose = require("mongoose");
const { artists } = require("./artists");
require("dotenv").config();

const app = express();
const PORT = 4000;

// MONGODB STUFF
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

// Routes
app.get("/", (req, res) => {
  const data = artists;
  res.render("index.ejs", { info: data });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
