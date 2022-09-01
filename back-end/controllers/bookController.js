const express = require("express");
const books = express.Router();
const { getAllBooks, getBook, createBook, deleteBook, updateBook } = require("../queries/books.js");
const { checkTitle, checkAuthor, checkSeriesBoolean, checkFavBoolean } = require("../validations/checkBooks.js");

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
books.post("/", checkTitle, checkAuthor, checkSeriesBoolean, checkFavBoolean, async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: "Cannot Add Book." });
  }
});

//DELETE
books.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBook = await deleteBook(id);
  if (deletedBook.id) {
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: "Book Not Found." });
  }
});

//UPDATE
books.put("/:id", checkTitle, checkAuthor, checkSeriesBoolean, checkFavBoolean, async (req, res) => {
  const { id } =req.params;
  const updatedBook = await updateBook(req.body, id);
  if (updatedBook.id) {
    res.status(200).json(updatedBook);
  } else {
    res.status(404).json({ error: "Book Not Updated!"})
  }
});

module.exports = books;
