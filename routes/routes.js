const express = require("express");
const Model = require("../model/model");

const router = express.Router();

//// Endpoints

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

// POST route
router.post("/post", async (req, res) => {
  const artist = new Model({
    alias: req.body.alias,
    name: req.body.name,
    likes: 0,
  });

  try {
    const saveArtist = await artist.save();
    res.status(200).json(saveArtist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
