import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import BooksContext from "./context/books";
import useBooksContext from "./hooks/use-books-context";

const App = () => {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  },[fetchBooks]);

  return (
    <div className="app">
      <h1>reading a book</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
