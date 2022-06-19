import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableComponentProps } from './table.component.types';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import Book from '../../interfaces/books.interface';
import DeleteBookComponent from '../delete.book.component/delete.book.component';

const  TableComponent = (props: TableComponentProps) => {
    const { rows, books, setBooks } = props;
    const [open, setOpen] = useState(false);
    const [bookToDelete, setBookToDelete] = useState<Book>();

    const handleClickOpen = (book: Book) => {
        setBookToDelete(book);
        setOpen(true);
    }

    const renderDeleteButton = (book: Book) => {
        return (
            <IconButton aria-label="delete" onClick={() => handleClickOpen(book)}>
                <DeleteIcon />
            </IconButton>
        )
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ISBN</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Author</TableCell>
                            <TableCell align="left">Theme</TableCell>
                            <TableCell align="right">Publication year</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rows ||[]).map((row) => (
                            <TableRow key={row.isbn} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.isbn}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.author}</TableCell>
                                <TableCell align="left">{row.theme}</TableCell>
                                <TableCell align="right">{row.publicationYear}</TableCell>
                                <TableCell align="center">{renderDeleteButton(row)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteBookComponent books={books} setBooks={setBooks} open={open} setOpen={setOpen} bookToDelete={bookToDelete as Book} setBookToDelete={setBookToDelete} />
        </>
    )
}

export default TableComponent;