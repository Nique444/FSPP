import axios from "axios";
import { useState, useEffect } from "react";
import Book from "./Book.js";

const API = process.env.REACT_APP_API_URL;

export default function BooksIndex() {
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
