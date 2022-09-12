import { Link } from 'react-router-dom';

export default function Book({ book }) {
  return (
    <div className="book">
        <Link className="Book" to={`/books/${book.id}`}> <img src={book.image} alt="" className="resize" />
        </Link>
      <div className="card-body">
        <Link to={`/books/${book.id}/edit`}><img src="https://img.icons8.com/arcade/64/000000/experimental-edit-arcade.png" alt=''/></Link>
      </div>
    </div>
  )
}
