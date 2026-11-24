
import { Link } from "react-router";

function BookCard({ book, handleIssue, handleReturn }) {
  return (
    <div className="book-card">

      <h3>{book.title}</h3>

      <p>Author: {book.author}</p>

      <p>Genre: {book.genre}</p>

      <p>Available Copies: {book.availableCopies}</p>

      <Link to={`/books/${book.id}`}>
        View Details
      </Link>

      <br />

      {book.isIssued ? (
        <button onClick={() => handleReturn(book.id)}>
          Return Book
        </button>
      ) : book.availableCopies > 0 ? (
        <button onClick={() => handleIssue(book.id)}>
          Issue Book
        </button>
      ) : (
        <p>Not Available</p>
      )}

    </div>
  );
}

export default BookCard;
