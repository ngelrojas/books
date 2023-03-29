import { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

const BookList = ({books, onDelete, onEdit}) => {
    const value = useContext(BooksContext);
    
    const renderBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    })

    return (
        <div className="book-list">
            {value}
        {renderBooks}
        </div>
    );
}
export default BookList;