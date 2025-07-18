import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    "title": String,
    "author": String,
    "coverImage": String,
    "description": String,
});

const bookModel = mongoose.model("books", bookSchema);

export default bookModel;