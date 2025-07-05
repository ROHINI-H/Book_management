import Book from "./Book";
import "./style.css";
import { Books } from "../utils/mockData";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

function BookList() {
    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(Books);

    const {setUserName} = useContext(userContext);

    function handleSearch() {
        setFilteredBooks(Books.filter((book) =>
            book.title.toLowerCase().includes(searchText.toLowerCase())
        ));
    }

    return (
        <>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <div className="search">
                <h1>Book Management App</h1>
                <h2>Search Books</h2>
                <div>
                    <input type="text" className="search-input" onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>

            </div>

            <div className="bookList">
                {
                    filteredBooks.map(data => (
                        <Link to={`/book/${data.id}`}>
                            <Book key={data.id} details={data} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default BookList;