const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  alias: {
    require: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  likes: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Data", dataSchema);
