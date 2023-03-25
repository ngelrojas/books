import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({book, onDelete, onEdit}) => {
    const [showEdit, setShowEdit] = useState(false);
    
    const handleClickDelete = () => {
        onDelete(book.id)
    }

    const handleClickEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h4>{book.title}</h4>;
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    return (
        <div className="book-show">
            <button className="edit" onClick={handleClickEdit}>Edit</button>
            <div className="actions">
                <button onClick={handleClickDelete}>Delete</button>
            </div>
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
        </div>
    )
}
export default BookShow;
