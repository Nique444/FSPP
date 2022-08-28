// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const booksController = require("./controllers/bookController.js")

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use("/books", booksController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to The Book Lovers App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;