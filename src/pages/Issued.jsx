
import BookCard from "../components/BookCard";

function Issued({ books, handleIssue, handleReturn }) {
  const issuedBooks = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].isIssued === true) {
      issuedBooks.push(books[i]);
    }
  }

  if (issuedBooks.length === 0) {
    return (
      <div className="issued-page">
        <h1>Issued Books</h1>
        <h3>No books issued yet</h3>
      </div>
    );
  }

  const bookCards = [];

  for (let i = 0; i < issuedBooks.length; i++) {
    const book = issuedBooks[i];

    bookCards.push(
      <BookCard
        key={book.id}
        book={book}
        handleIssue={handleIssue}
        handleReturn={handleReturn}
      />
    );
  }

  return (
    <div className="issued-page">
      <h1>Issued Books</h1>

      <div className="books-grid">{bookCards}</div>
    </div>
  );
}

export default Issued;
