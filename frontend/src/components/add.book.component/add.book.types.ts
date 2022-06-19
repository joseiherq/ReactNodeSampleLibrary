import Book from "../../interfaces/books.interface"

type AddBookComponentProps = {
    books: Book[];
    setBooks: Function;
}

export type { AddBookComponentProps };