import Book from "../../interfaces/books.interface"

type TableComponentProps = {
    rows: Book[];
    books: Book[];
    setBooks: Function;
}

export type { TableComponentProps };