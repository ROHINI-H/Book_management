import bookModel from "../Model/books.model.js";

export function createBook(req, res) {
    const { title, author, coverImage, description } = req.body;

    // create the new book
    const newBook = new bookModel({
        title: title,
        author: author,
        coverImage: coverImage,
        description: description,
    });

    // save the new book into db
    newBook.save().then(data => {
        if (!data) {
            return res.status(400).json({ message: "Something went wrong" });
        }

        res.send(data);
    });
}

export function fetchBooks(req, res) {
    bookModel.find().then(data => {
        if (!data) {
            return res.status(400).send("Something went wrong");
        }
        res.send(data);
    }).catch(err => res.status(500).json({ message: "Internal Server Error" }) || err.message)
}