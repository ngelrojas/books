import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

const BookShow = ({book}) => {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookId } = useBooksContext();
    
    const handleClickDelete = () => {
        deleteBookId(book.id)
    }

    const handleClickEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
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
