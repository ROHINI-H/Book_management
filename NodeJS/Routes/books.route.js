import { createBook, fetchBooks } from "../Controller/books.controller.js";

export function routes(app) {
    app.post("/api/book", createBook);
    app.get("/api/books", fetchBooks);
}