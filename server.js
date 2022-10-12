const express = require("express");
const { artists } = require("./artists");

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  const data = artists;
  res.render("index.ejs", { info: data });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
