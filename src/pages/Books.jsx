
import BookCard from "../components/BookCard";

function Books({ books, handleIssue, handleReturn }) {

  return (
    <div className="books-page">

      <h1>All Books</h1>

      <div className="books-grid">

        {books.length > 0 ? (

          books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleIssue={handleIssue}
              handleReturn={handleReturn}
            />
          ))

        ) : (
          <p>No books found.</p>
        )}

      </div>

    </div>
  );
}

export default Books;
