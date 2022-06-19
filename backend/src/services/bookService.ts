import BookDataAccess from "../database/bookDataAccess";

class BookService {
    public getAllBooks() {
        try {
            const bookDataAccess = new BookDataAccess();
            const allBooks = bookDataAccess.getAllBooks()
            return allBooks;
        } catch (err) {
            throw err;
        }
    };
  
    public getOneBook(bookIsbn) {
        try {
            const bookDataAccess = new BookDataAccess();
            const book = bookDataAccess.getOneBook(Number(bookIsbn));
            return book;
        } catch (err) {
            throw err;
        }
    };
    
    public createNewBook(body) {
        const newBook = {
            isbn: body.isbn,
            title: body.title,
            author: body.author,
            theme: body.theme,
            publicationYear: body.publicationYear,
        };
        try {
            const bookDataAccess = new BookDataAccess();
            const createdBook = bookDataAccess.createNewBook(newBook);
            return createdBook;
        } catch (err) {
            throw err;
        }
    };
    
    public updateOneBook(bookIsbn, body) {
        const bookToUpdate = {
            isbn: body.isbn,
            title: body.title,
            author: body.author,
            theme: body.theme,
            publicationYear: body.publicationYear,
        };
        try {
            const bookDataAccess = new BookDataAccess();
            const updatedBook = bookDataAccess.updateOneBook(Number(bookIsbn), bookToUpdate);
            return updatedBook;
        } catch (err) {
            throw err;
        }
    };
    
    public deleteOneBook(bookIsbn) {
        try {
            const bookDataAccess = new BookDataAccess();
            bookDataAccess.deleteOneBook(Number(bookIsbn));
        } catch (err) {
            throw err;
        }
    };
}
  
export default BookService;