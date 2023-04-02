import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){
    const [books, setBook] = useState([]);

    // we wrap the fetchBooks function in useCallback to prevent it from being recreated on every render
    const fetchBooks = useCallback( async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBook(response.data);
      }, []);

    // const stableFechBooks = useCallback(fetchBooks, []); # it's not necessary

    const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {title});

    const updateBooks = books.map((book) => (book.id === id ? { ...book, ...response.data } : book));
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

    const deleteBookId = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updateBooks = books.filter((book) => book.id !== id);
    setBook(updateBooks);
    }
    
    const valueToShare = {
        books,
        deleteBookId,
        editBookById,
        createBook,
        fetchBooks
    }

    return(
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;