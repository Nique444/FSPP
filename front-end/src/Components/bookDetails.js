import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


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
    <article>
      <img src={book.image} alt="pic"/> 
      <div className="showNavigation">
        <h3>Genre: {book.genre}</h3>
        <h3>Published: {book.date}</h3>
        {/* <h3>Series Novel: {book.is_series}</h3> */}
        <h4>Summary: </h4>
        <div>
          {" "}
          <Link to={`/books`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/books/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  </>
  )
}
