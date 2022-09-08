import { Link } from 'react-router-dom';

export default function Book({ book }) {
  return (
    <div className="book">
      <img src={book.image} alt="" className="resize" />
      <h4 className="card-title">
        <Link className="Book" to={`/books/${book.id}`}>
        </Link>
      </h4>
      <div className="card-body">
        <Link to={`/books/${book.id}/edit`}>✏️</Link>
      </div>
    </div>
  )
}
