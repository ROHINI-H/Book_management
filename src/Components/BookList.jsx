import Book from "./Book";
import "./style.css";

function BookList(props) {
    return (
        <div className="bookList">
            {
                props.booksData.map(data => (
                    <Book key={data.id} details={data} />
                ))
            }
        </div>
    )
}

export default BookList;