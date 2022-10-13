const express = require("express");
const Model = require("../model/model");

const router = express.Router();

//// Endpoints

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

module.exports = router;
