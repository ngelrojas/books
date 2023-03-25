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
    // 1 adding new element to array
    // const updateColor = [...book, title];
    // setBook(updateColor);

    // 2 adding new element to array using position of element
    // const updateColor =[
    //   ...book.slice(0, index),
    //   title,
    //   ...book.slice(index)
    // ]
    // setBook(updateColor);

    // 3 removing element from array 
    // const updateColor = book.filter((book, i) => i !== index);
    // setBook(updateColor);

    // 4 update book
    // the title my be title: title, but its the same name and using
    // javascript tricks we can use just one name in line 32
    // const updateBooksID = (id, title) => {
    //   const updateBook = books.map((book) => (book.id === id ? {..book, title} : book}));
    //   setBooks(updateBook);
    // }

    // 
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
