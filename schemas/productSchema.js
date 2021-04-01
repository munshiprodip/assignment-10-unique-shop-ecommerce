const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Male & Female"],
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = productSchema;
