import Book from "./Book";

function BookList(props) {
    return (
        <>
            {/* <Book details ={props.booksData[0]} /> */}
            {
                props.booksData.map(data => (
                    <Book details={data} />
                ))
            }
        </>
    )
}

export default BookList;