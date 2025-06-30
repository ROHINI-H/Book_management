function Book(props) {
    console.log(props);
    return (
        <>
        <img src={props.details.coverImage} alt="book cover" width="200px" height="200px" />
        <div>
            <h2>{props.details.title}</h2>
            <h3>{props.details.author}</h3>
            <p>{props.details.description}</p>
        </div>
        </>
    )
}

export default Book;