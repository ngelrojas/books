import { useState } from "react";


const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('');

    const handleChanges = (e) => {
        setTitle(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Book Title</label>
                <input className="input" value={title} onChange={handleChanges} />
                <button className="button">Create Book</button>
            </form>
        </div>
    );
}
export default BookCreate;