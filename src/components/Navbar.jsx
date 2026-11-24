
import { Link } from "react-router";

function Navbar({ books }) {
  const issuedCount = books.filter(
    (book) => book.isIssued === true
  ).length;

  return (
    <nav className="navbar">
      <h2>Book Manager</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/books">Books</Link>

        <Link to="/issued">
          Issued ({issuedCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
