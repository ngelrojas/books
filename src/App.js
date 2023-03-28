import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBook] = useState([]);

  const editBookById = (id, title) => {
    const updateBooks = books.map((book) => (book.id === id ? { ...book, title } : book));
    setBook(updateBooks);
  }


  const createBook = (title, index) => {
    const updateBooks = [
      ...books, 
      {id: Math.round(Math.random() * 9999), title}
    ];
    setBook(updateBooks);
  }

  const deleteBookId = (id) => {
    const updateBooks = books.filter((book) => book.id !== id);
    setBook(updateBooks);
  }

  return (
    <div className="app">
      <h1>reading a book</h1>
      <BookList books={books} onDelete={deleteBookId} onEdit={editBookById} />
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
