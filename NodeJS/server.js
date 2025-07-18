import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/books.route.js";

const app = new express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;
db.on("open", () => {
    console.log("Database connection is successful");
});

db.on("error", () => {
    console.log("Connection is not successful");
});

routes(app);
