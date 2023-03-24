import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({book, onDelete}) => {
    const [showEdit, setShowEdit] = useState(false);
    
    const handleClickDelete = () => {
        onDelete(book.id)
    }

    const handleClickEdit = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit book={book} />
    }

    return (
        <div className="book-show">
        {book.title}
        <div>{content}</div>
        <button className="edit" onClick={handleClickEdit}>Edit</button>
        <div className="actions">
            <button onClick={handleClickDelete}>Delete</button>
        </div>
        </div>
    )
}
export default BookShow;
