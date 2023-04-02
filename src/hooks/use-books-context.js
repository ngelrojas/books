import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContext() {
    const context = useContext(BooksContext);
    if (context === undefined) {
        throw new Error('useBooksContext must be used within a BooksProvider');
    }
    return context;
}

export default useBooksContext;