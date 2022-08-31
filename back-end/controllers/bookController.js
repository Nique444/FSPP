const express = require("express");
const books = express.Router();
const { getAllBooks, getBook, createBook } = require("../queries/books.js");

//INDEX
books.get("/", async (req, res) => {
  const allBooks = await getAllBooks();
  if (allBooks[0]) {
    res.status(200).json(allBooks);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

//SHOW
books.get("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await getBook(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book Not Found." });
  }
});

//CREATE
books.post("/", async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: "Cannot Add Book" });
  }
});

//DELETE
books.delete("/:id", (req, res) => {});

//UPDATE
books.put("/:id", (req, res) => {});

module.exports = books;
