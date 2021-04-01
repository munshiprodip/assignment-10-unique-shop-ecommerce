const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    default: "Processing",
  },
});

module.exports = orderSchema;
