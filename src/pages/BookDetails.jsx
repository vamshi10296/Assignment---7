
import { useParams, Link } from "react-router";

function BookDetails({ books, handleIssue, handleReturn }) {

  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div className="book-details">

      <Link to="/books">Back to Books</Link>

      <h1>{book.title}</h1>

      <p>Author: {book.author}</p>

      <p>Genre: {book.genre}</p>

      <p>Year: {book.year}</p>

      <p>Pages: {book.pages}</p>

      <p>Total Copies: {book.totalCopies}</p>

      <p>Available Copies: {book.availableCopies}</p>

      <p>
        Status: {book.availableCopies > 0
          ? "Available"
          : "Not Available"}
      </p>

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

export default BookDetails;
