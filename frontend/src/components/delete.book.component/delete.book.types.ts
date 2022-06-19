import Book from "../../interfaces/books.interface"

type DeleteBookComponentProps = {
    books: Book[];
    setBooks: Function;
    open: boolean;
    setOpen: Function;
    bookToDelete: Book;
    setBookToDelete: Function;
}

export type { DeleteBookComponentProps };