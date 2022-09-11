import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


export default function BookNew() {
    let navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;

    const addBook = (newBook) => {
        axios
        .post(`${API}/books`, newBook)
        .then(
            (response) => {
                navigate(`/books`);
            }
        )
        .catch((error) => console.error(error));
    };

    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        date: "",
        image: "",
        summary: "",
      });

      const handleTextChange = (event) => {
        setBook({ ...book, [event.target.id]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        addBook(book)
      };

  return (
    <div className="new">
      <Container>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="title">Title:</Form.Label>
            <Form.Control
              id="title"
              value={book.title}
              type="text"
              onChange={handleTextChange}
              placeholder="Book Title"
              required
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label htmlFor="author">Author:</Form.Label>
            <Form.Control
              id="author"
              value={book.author}
              type="text"
              onChange={handleTextChange}
              placeholder="Author"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="genre">Genre:</Form.Label>
            <Form.Control
              id="genre"
              value={book.genre}
              type="text"
              onChange={handleTextChange}
              placeholder="Book Genre"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="date">Year Published:</Form.Label>
            <Form.Control
              id="date"
              value={book.date}
              type="text"
              onChange={handleTextChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="image">Image:</Form.Label>
            <Form.Control
              id="image"
              type="url"
              pattern="http[s]*://.+"
              required
              value={book.image}
              placeholder="https://"
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="summary">Summary:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="summary"
              type="text"
              value={book.summary}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Button className="newpage-buttons" type="submit"> Submit </Button>
          <Link to={`/books/`}>
            <Button className="newpage-buttons">Back</Button>
          </Link>
        </Form>
      </Container>
    </div>
  )
}
