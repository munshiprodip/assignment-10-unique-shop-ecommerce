const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productHandler = require("./routeHandler/productHandler");
const orderHandler = require("./routeHandler/orderHandler");
require("dotenv").config();

const port = process.env.PORT;
// Initialize the Express app.
const app = express();
app.use(express.json());
app.use(cors());

//Database connection with mongoose
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r4i0r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

// Check server status
app.get("/", (req, res) => {
  res.status(200).json("Server started successfully");
});
// App routs
app.use("/product", productHandler);
app.use("/order", orderHandler);

app.listen(process.env.PORT || port, () => {
  console.log("listening on port", port);
});
