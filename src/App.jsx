
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import booksData from "./data/books.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Issued from "./pages/Issued.jsx";

import "./App.css";

function App() {
  const [books, setBooks] = useState(booksData);

  function handleIssue(id) {
    const updatedBooks = [];

    for (let i = 0; i < books.length; i++) {
      const book = books[i];

      if (book.id === id) {
        const newBook = Object.assign({}, book);
        newBook.isIssued = true;
        newBook.availableCopies = book.availableCopies - 1;
        updatedBooks.push(newBook);
      } else {
        updatedBooks.push(book);
      }
    }

    setBooks(updatedBooks);
  }

  function handleReturn(id) {
    const updatedBooks = [];

    for (let i = 0; i < books.length; i++) {
      const book = books[i];

      if (book.id === id) {
        const newBook = Object.assign({}, book);
        newBook.isIssued = false;
        newBook.availableCopies = book.availableCopies + 1;
        updatedBooks.push(newBook);
      } else {
        updatedBooks.push(book);
      }
    }

    setBooks(updatedBooks);
  }

  return (
    <BrowserRouter>
      <Navbar books={books} />

      <Routes>
        <Route path="/" element={<Home books={books} />} />

        <Route
          path="/books"
          element={
            <Books
              books={books}
              handleIssue={handleIssue}
              handleReturn={handleReturn}
            />
          }
        />

        <Route
          path="/books/:id"
          element={
            <BookDetails
              books={books}
              handleIssue={handleIssue}
              handleReturn={handleReturn}
            />
          }
        />

        <Route
          path="/issued"
          element={
            <Issued
              books={books}
              handleIssue={handleIssue}
              handleReturn={handleReturn}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
