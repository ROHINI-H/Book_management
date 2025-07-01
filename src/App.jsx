import BookList from "./Components/BookList";
import { Books } from "./utils/mockData";
import "./Components/style.css"
import { useState } from "react";

function App() {
  const [searchText, SetSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch() {
    setFilteredBooks(Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    ));
  }

  return (
    <>
      <div className="search">
        <h1>Book Management App</h1>
        <h2>Search Books</h2>
        <div>
          <input type="text" className="search-input" onChange={(e) => SetSearchText(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>

      </div>
      <BookList booksData={filteredBooks} />
    </>
  )
}

export default App;