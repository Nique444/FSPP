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
      "INSERT INTO books (title, author, genre, date, is_series, is_favorite, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        book.title,
        book.author,
        book.genre,
        book.date,
        book.is_series,
        book.is_favorite,
        book.image,
      ]
    );
    return newBook;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllBooks, getBook, createBook };
