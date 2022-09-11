import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

export default function BookEdit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    date: "",
    image: "",
    summary: "",
  });

  useEffect(() => {
    axios.get(`${API}/books/${id}`).then(
      (response) => setBook(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const updateBook = (book) => {
    axios.put(`${API}/books/${id}`, book)
    .then(
      () => {
        // console.log('trying to work')
        // setBook(res.data);
        // console.log('edit page')
        // console.log('edit res', res.data)
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
    updateBook(book);
  };

  return (
    <div className="edit">
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
              value={book.summary}
              onChange={handleTextChange}
            />
          </Form.Group>

          <br />

          {/* <Form.Select required>
            <option value="" disabled selected hidden>
              Please Choose
            </option>
            <option value={book.is_series}>Yes</option>
            <option value={book.is_series}>No</option>
          </Form.Select> */}

          <br />

          <Button className="editpage-buttons" type="submit"> Submit </Button>
          <Link to={`/books/`}>
            <Button className="editpage-buttons">Back</Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
