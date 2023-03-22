import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [book, setBook] = useState([]);

  const createBook = (title) => {
    console.log(title);
  }

  return (
    <div >
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
