const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
