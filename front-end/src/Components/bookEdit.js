import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const API = process.env.REACT_APP_API_URL;

export default function BookEdit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    date: "",
    is_series: false,
    image: "",
  });

  useEffect(() => {
    axios.get(`${API}/books/${id}`).then(
      (response) => setBook(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const updateBook = () => {
    axios.put(`${API}/books/${id}`, book).then(
      (res) => {
        setBook(res.data);
        navigate(`/books`);
      },
      (error) => console.error(error)
    );
  };

  const handleTextChange = (event) => {
    setBook({ ...book, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBook();
  };

  return (
    <>
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
            id="summary"
            type="text"
            value=""
            onChange={handleTextChange}
            />
        </Form.Group>
        <Form.Select required>
            <option value="" disabled selected hidden>Please Choose</option>
            <option value={book.is_series}>Yes</option>
            <option value={book.is_series}>No</option>
        </Form.Select>
        <Button type="submit"> Submit </Button>
        <Link to={`/books/`}>
          <Button>Back</Button>
        </Link>
      </Form>
    </>
  );
}
