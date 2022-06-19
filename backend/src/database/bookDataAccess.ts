import { saveToDatabase } from "./utils";
import DB from "./db.json";

class BookDataAccess {
    public getAllBooks() {
        try {
            return DB.books;
        } catch (err) {
            throw { status: 500, message: err };
        }
    };

    public getOneBook(bookIsbn) {
        try {
            const book = DB.books.find((book) => book.isbn === bookIsbn);
            if (!book) {
                throw {
                    status: 400,
                    message: `Can't find book with the isbn '${bookIsbn}'`
                };
            }
            return book;
        } catch (err) {
            throw { status: err?.status || 500, message: err?.message || err };
        }
    };

    public createNewBook(newBook) {
        try {
            const isAlreadyAdded = DB.books.findIndex((book) => book.isbn === newBook.isbn) > -1;
            if (isAlreadyAdded) {
                throw {
                    status: 400,
                    message: `Book with the isbn '${newBook.isbn}' already exists`
                };
            } else {
                DB.books.push(newBook);
                saveToDatabase(DB);
                return newBook;
            }
        } catch (err) {
            throw { status: err?.status || 500, message: err?.message || err };
        }
    };

    public updateOneBook(bookIsbn, bookToUpdate) {
        try {
            const indexForUpdate = DB.books.findIndex((book) => book.isbn === bookIsbn);
            if (indexForUpdate === -1) {
                throw {
                    status: 400,
                    message: `Can't find book with the isbn '${bookIsbn}'`
                };
            }
            DB.books[indexForUpdate] = bookToUpdate;
            saveToDatabase(DB);
            return bookToUpdate;
        } catch (err) {
            throw { status: err?.status || 500, message: err?.message || err };
        }
    };
  
    public deleteOneBook(bookIsbn) {
        try {
            const indexForDeletion = DB.books.findIndex((book) => book.isbn === bookIsbn);
            if (indexForDeletion === -1) {
                throw {
                    status: 400,
                    message: `Can't find book with the isbn '${bookIsbn}'`
                };
            }
            DB.books.splice(indexForDeletion, 1);
            saveToDatabase(DB);
        } catch (err) {
            throw { status: err?.status || 500, message: err?.message || err };
        }
    };
}

export default BookDataAccess;