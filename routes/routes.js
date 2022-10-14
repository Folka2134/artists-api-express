const { response } = require("express");
const express = require("express");
const Model = require("../model/model");

const router = express.Router();

//// Endpoints

// GET routes
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST routes
router.post("/post", async (req, res) => {
  const artist = new Model({
    alias: req.body.alias,
    name: req.body.name,
    likes: 0,
  });

  try {
    await artist.save();
    res.redirect("/");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE routes
router.delete("/deleteArtist", async (req, res) => {
  try {
    await Model.deleteOne({ alias: req.body.alias });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
