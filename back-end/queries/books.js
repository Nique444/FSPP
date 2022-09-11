const db = require("../db/dbConfig.js");

const getAllBooks = async () => {
  try {
    const allBooks = await db.any("SELECT * FROM books");
    return allBooks;
  } catch (error) {
    return error;
  }
};

const getBook = async (id) => {
  try {
    const oneBook = await db.oneOrNone("SELECT * FROM books WHERE id=$1", id);
    return oneBook;
  } catch (error) {
    return error;
  }
};

const createBook = async (book) => {
  try {
    const newBook = await db.one(
      "INSERT INTO books (title, author, genre, date, image, summary) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        book.title,
        book.author,
        book.genre,
        book.date,
        book.image,
        book.summary,
      ]
    );
    return newBook;
  } catch (error) {
    return error;
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await db.one(
      "DELETE FROM books WHERE id = $1 RETURNING *",
      id
    );
    return deletedBook;
  } catch (error) {
    return error;
  }
};

const updateBook = async (book, id) => {
  const { title, author, genre, date, image, summary } = book;
  try {
    //first argument is the QUERY string//
    //second argument is the actual DATA//
    const updatedBook = await db.one(
      "UPDATE books SET title = $1, author = $2, genre = $3, date = $4, image = $5, summary = $6 WHERE id = $7 RETURNING *",
      //Order matters here. Below//
      [title, author, genre, date, image, summary, id]
    );
    return updatedBook;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllBooks, getBook, createBook, deleteBook, updateBook };