import BookList from "./Components/BookList";
import { Books } from "./utils/mockData";

function App() {
  return (
    <>
      <h1>Book Management App</h1>
      <BookList booksData ={Books} />
    </>
  )
}

export default App;