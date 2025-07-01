import "./style.css";

function Book(props) {
    return (
        <div className="book-card">
            <img src={props.details.coverImage} alt="book cover" className="book-cover" />
            <div>
                <h2 className="book-title">{props.details.title}</h2>
                <h3 className="book-author">{props.details.author}</h3>
                <p className="book-description">{props.details.description}</p>
            </div>
        </div>
    )
}

export default Book;