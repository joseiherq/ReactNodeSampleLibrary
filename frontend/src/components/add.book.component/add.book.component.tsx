import { useState } from "react";
import Book from "../../interfaces/books.interface";
import { addOneBook } from "../../services/books.service";
import { AddBookComponentProps } from "./add.book.types";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const  AddBookComponent = (props: AddBookComponentProps) => {
    const { books, setBooks } = props;
    const [open, setOpen] = useState(false);
    const [newBook, setNewBook] = useState<Book>();
    const [validateForm, setValidateForm] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleDialogClose = (event: unknown, reason: unknown) => {
        // Avoid to close dialog when clicks outside
        if (reason && reason === "backdropClick") 
            return;
        handleClose();
    }

    const handleClose = () => {
        setNewBook(undefined);
        setValidateForm(false);
        setOpen(false);
    }

    const handleAddBook = () => {
        setValidateForm(true);
        if (newBook && ['isbn', 'title', 'author', 'theme', 'publicationYear'].every((key: string) => newBook[key as keyof Book])) {
            addOneBook({...newBook} as Book).then((newBook: Book) => {
                handleClose();
                setBooks([...books, ...[newBook]]);
            })
        }
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new book
            </Button>
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Add new book</DialogTitle>
                <DialogContent>
                    <TextField autoFocus required margin="dense" id="isbn" label="ISBN" type="number" fullWidth variant="standard" onChange={(ev) => {setNewBook({...newBook as Book, ...{isbn: Number(ev.target.value)}})}} error={validateForm && !(newBook as Book)?.isbn} />
                    <TextField required margin="dense" id="title" label="Title" type="text" fullWidth variant="standard" onChange={(ev) => {setNewBook({...newBook as Book, ...{title: ev.target.value}})}} error={validateForm && !(newBook as Book)?.title} />
                    <TextField required margin="dense" id="author" label="Author" type="text" fullWidth variant="standard" onChange={(ev) => {setNewBook({...newBook as Book, ...{author: ev.target.value}})}} error={validateForm && !(newBook as Book)?.author} />
                    <TextField required margin="dense" id="theme" label="Theme" type="text" fullWidth variant="standard" onChange={(ev) => {setNewBook({...newBook as Book, ...{theme: ev.target.value}})}} error={validateForm && !(newBook as Book)?.theme} />
                    <TextField required margin="dense" id="publicationYear" label="Publication year" type="number" fullWidth variant="standard" onChange={(ev) => {setNewBook({...newBook as Book, ...{publicationYear: Number(ev.target.value)}})}} error={validateForm && !(newBook as Book)?.publicationYear} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddBook}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddBookComponent;