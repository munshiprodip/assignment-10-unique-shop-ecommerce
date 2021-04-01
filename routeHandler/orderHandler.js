const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const orderSchema = require("../schemas/orderSchema");
const Order = new mongoose.model("Order", orderSchema);

// Get single Order
router.get("/:userEmail", async (req, res) => {
  await Order.find({ userEmail: req.params.userEmail }, (err, order) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        order: order,
        messages: "Success",
      });
    }
  });
});

// Post single Order
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save((err) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        messages: "Order added successfully",
      });
    }
  });
});

module.exports = router;
