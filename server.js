const express = require("express");
const { artists } = require("./artists");

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send(artists);
});

app.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
