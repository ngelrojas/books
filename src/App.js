import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBook] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBook(response.data);
  };


  const editBookById = (id, title) => {
    const updateBooks = books.map((book) => (book.id === id ? { ...book, title } : book));
    setBook(updateBooks);
  }


  const createBook = async (title, index) => {
    const response = await axios.post('http://localhost:3001/books', {title});
    
    const updateBooks = [
      ...books, 
      response.data
    ];
    setBook(updateBooks);
  }

  const deleteBookId = (id) => {
    const updateBooks = books.filter((book) => book.id !== id);
    setBook(updateBooks);
  }

  useEffect(() => {
    fetchBooks();
  },[]);

  return (
    <div className="app">
      <h1>reading a book</h1>
      <BookList books={books} onDelete={deleteBookId} onEdit={editBookById} />
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
