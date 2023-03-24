import { useState } from "react";

const BookEdit = ({book}) => {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('here', title)
    }


    return (
        <form onSubmit={handleSubmit} className="book-edit">
        <label>title</label>
        <input className="input" type="text" value={title} onChange={handleChange} />
        <button className="button is-primary">save</button>
        </form>
    );
}
export default BookEdit;