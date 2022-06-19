import axios from "axios";
import Book from "../interfaces/books.interface";

const getAllBooks = (): Promise<Book[]> => (
    axios
        .get(`http://localhost:4000/api/books`)
        .then((res) => {
            return res.data.data;
        })
        .catch(err => {
            console.log(err);
        })
)

const addOneBook = (newBook: Book): Promise<Book> => (
    axios
        .post(`http://localhost:4000/api/books`, newBook)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log(err);
        })
)

const deleteOneBook = (newBook: Book): Promise<boolean> => (
    axios
        .delete(`http://localhost:4000/api/books/${newBook.isbn}`)
        .then((res) => {
            return res.status === 204
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
)

export { getAllBooks, addOneBook, deleteOneBook }