import BookService from "../services/bookService";

class BookController {
    public getAllBooks(req, res) {
        try {
            const bookService = new BookService();
            const allBooks = bookService.getAllBooks();
            res.send({ status: "OK", data: allBooks });
        } catch (err) {
            res.status(err?.status || 500).send({ status: "FAILED", data: { error: err?.message || err } });
        }
    };
    
    public getOneBook(req, res) {
        const { params: { bookIsbn } } = req;
        if (!bookIsbn) {
            return res.status(400).send({ status: "FAILED", data: { error: "Parameter ':bookIsbn' can not be empty" },});
        }
        try{
            const bookService = new BookService();
            const book = bookService.getOneBook(bookIsbn);
            res.send({ status: "OK", data: book });
        } catch (err) {
            res.status(err?.status || 500).send({ status: "FAILED", data: { error: err?.message || err } });
        }
    };
    
    public createNewBook(req, res) {
        const { body } = req;
        if (!body.isbn || !body.title || !body.author || !body.theme || !body.publicationYear) {
            return res.status(400).send({status: "FAILED", data: {error: "One of the following keys is missing or is empty in request body: 'isbn', 'title', 'author', 'theme', 'publicationYear'"}});
        }
        try {
            const bookService = new BookService();
            const createdBook = bookService.createNewBook(body);
            res.status(201).send({ status: "OK", data: createdBook });
        } catch (err) {
            res.status(err?.status || 500).send({ status: "FAILED", data: { error: err?.message || err } });
        }
    };
    
    public updateOneBook(req, res) {
        const { body, params: { bookIsbn } } = req;
        if (!bookIsbn) {
            return res.status(400).send({status: "FAILED", data: { error: "Parameter ':bookIsbn' can not be empty" }});
        }
        if (!body.isbn || !body.title || !body.author || !body.theme || !body.publicationYear) {
            return res.status(400).send({status: "FAILED", data: {error: "One of the following keys is missing or is empty in request body: 'isbn', 'title', 'author', 'theme', 'publicationYear'"}});
        }
        try {
            const bookService = new BookService();
            const updatedBook = bookService.updateOneBook(bookIsbn, body);
            res.send({ status: "OK", data: updatedBook });
        } catch (err) {
            res.status(err?.status || 500).send({ status: "FAILED", data: { error: err?.message || err } });
        }
    };
    
    public deleteOneBook(req, res) {
        const { params: { bookIsbn } } = req;
        if (!bookIsbn) {
            return res.status(400).send({status: "FAILED", data: { error: "Parameter ':bookIsbn' can not be empty" }});
        }
        try {
            const bookService = new BookService();
            bookService.deleteOneBook(bookIsbn);
            res.status(204).send({ status: "OK" });
        } catch (err) {
            res.status(err?.status || 500).send({ status: "FAILED", data: { error: err?.message || err } });
        }
    };
}
  
export default BookController;