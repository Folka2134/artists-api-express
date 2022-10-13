const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/routes");
const { artists } = require("./artists");

// Express setup
const app = express();
const PORT = 4000;

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
app.use("/api", routes);

// Routes
app.get("/", (req, res) => {
  const data = artists;
  res.render("index.ejs", { info: data });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
