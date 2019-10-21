const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MakeSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  slug: {
    type: String
  },
  image: {
    type: String
  },
  rating: {
    type: Number
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = makes = mongoose.model("Make", MakeSchema);
