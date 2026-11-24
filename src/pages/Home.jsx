
function Home({ books }) {

  const totalBooks = books.length;

  const issuedBooks = books.filter(
    (book) => book.isIssued === true
  ).length;

  const notAvailableBooks = books.filter(
    (book) => book.availableCopies === 0
  ).length;

  return (
    <div className="home">

      <h1>Library Book Manager</h1>

      <p>Welcome to our Library Management System</p>

      <div className="dashboard">

        <div className="card">
          <h2>Total Books</h2>
          <h1>{totalBooks}</h1>
        </div>

        <div className="card">
          <h2>Issued Books</h2>
          <h1>{issuedBooks}</h1>
        </div>

        <div className="card">
          <h2>Not Available Books</h2>
          <h1>{notAvailableBooks}</h1>
        </div>

      </div>

    </div>
  );
}

export default Home;
