
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Book from '../../interfaces/books.interface';
import { deleteOneBook } from '../../services/books.service';
import { DeleteBookComponentProps } from './delete.book.types';

const  DeleteBookComponent = (props: DeleteBookComponentProps) => {
    const { books, setBooks, open, setOpen, bookToDelete, setBookToDelete } = props;

    const handleClose = () => {
        setOpen(false);
    }

    const handleDeleteBook = (book: Book) => {
        deleteOneBook(book).then((success) => {
            if (success) {
                setBooks(books.filter(book => book.isbn !== bookToDelete?.isbn));
            }
            setBookToDelete(undefined);
            handleClose();
        });
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                Delete {bookToDelete?.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure to delete {bookToDelete?.title} with ISBN {bookToDelete?.isbn}?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => handleDeleteBook(bookToDelete)} autoFocus>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteBookComponent;