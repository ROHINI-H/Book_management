import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function BookDetails() {
    const params = useParams();
    const book = Books.filter((book) => book.id == params.id);
    const dispatch = useDispatch();

    function handleAddBook(item) {
        dispatch(addItem(item));
    }

    function handleRemoveItem() {
        dispatch(removeItem());
    }

    return (
        <>
            <h1>{`Book details for Book with id ${params.id}`}</h1><br />
            {
                book.map((book) => {
                    return (
                        <>
                            <h2>{book.title}</h2>
                            <p>{book.description}</p>
                            <img src={book.coverImage} alt="" width="200px" />
                            <h4>Published on {book.publishedDate}</h4>
                            <button onClick={() => handleAddBook(book)}>Add to cart</button>
                            <button onClick={handleRemoveItem}>Remove item</button>
                        </>
                    )
                })
            }
        </>
    )
}

export default BookDetails;