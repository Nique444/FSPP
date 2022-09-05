import axios from "axios";
import { useState, useEffect } from "react";
import Book from "./Book.js";

export default function BooksIndex() {
  const API = process.env.REACT_APP_API_URL;

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/books`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Books">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
}