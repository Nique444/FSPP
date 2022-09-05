import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="nav-title">
        <Link to="/books" className="nav-title-link">Book Lovers</Link>
      </h1>
      <button className="nav-button">
        <Link to="/books/new" className="nav-button-link">Add Your Fav Book</Link>
      </button>
    </nav>
  );
}