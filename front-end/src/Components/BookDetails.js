import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";


export default function BookDetails() {
    const [book, setBook] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/books/${id}`).then((response) => {
            setBook(response.data);
        });
    }, [id, navigate, API]);

    const deleteBook = () => {
        axios
            .delete(`${API}/books/${id}`)
            .then(() => {
                navigate(`/books`);
            })
            .catch((c) => console.error("catch", c));
    };

    const handleDelete = () => {
        deleteBook();
    };

  return (
    <>
    <article className="details">
      <img src={book.image} alt="pic"/> 
      <div className="showNavigation">
        <h3>Genre: {book.genre}</h3>
        <h3>Published: {book.date}</h3>
        {/* <h3>Series Novel: {book.is_series}</h3> */}
        <h4>Summary: {book.summary}</h4>
          <Link to={`/books/`}>
            <Button className="editpage-buttons">Back</Button>
          </Link>
          <Link to={`/books/${id}/edit`}>
            <Button className="details-button">Edit</Button>
          </Link>
        <div>
          <Button className="details-button" onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </article>
  </>
  )
}
