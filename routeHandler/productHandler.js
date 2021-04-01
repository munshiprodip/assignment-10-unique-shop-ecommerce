const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const productSchema = require("../schemas/productSchema");
const Product = new mongoose.model("Product", productSchema);

// Get all Products
router.get("/", async (req, res) => {
  await Product.find({}, (err, product) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        product: product,
        messages: "Success",
      });
    }
  });
});

// Get single Product
router.get("/:id", async (req, res) => {
  await Product.find({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        product: product,
        messages: "Success",
      });
    }
  });
});

// Post single Product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save((err) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        messages: "Product added successfully",
      });
    }
  });
});

// Update single Product
router.put("/:id", async (req, res) => {
  await Product.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        gender: req.body.gender,
        price: req.body.price,
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "Ops.... Somthing else. ",
        });
      } else {
        res.status(200).json({
          messages: "Product updated successfully",
        });
      }
    }
  );
});

// Delete single Product
router.delete("/:id", async (req, res) => {
  await Product.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        messages: "Product deleted successfully",
      });
    }
  });
});

module.exports = router;
