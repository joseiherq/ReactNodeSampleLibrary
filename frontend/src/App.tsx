import React from 'react';
import { Grid } from '@mui/material';
import { useEffect, useState } from "react";
import './App.css';
import AddBookComponent from './components/add.book.component/add.book.component';
import TableComponent from './components/table.component/table.component';
import Book from './interfaces/books.interface';
import { getAllBooks } from './services/books.service';

const App = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getAllBooks().then(books => setBooks(books))
    }, []);

    return (
        <Grid container spacing={2} sx={{width: '80%', marginTop: '20px', marginLeft: '10%'}}>
            <Grid item xs={6}>
                <h1>Simple React + Node Library</h1>
            </Grid>
            <Grid item xs={6} sx={{textAlign: 'right', marginTop: '20px'}}>
                <AddBookComponent books={books} setBooks={setBooks} />
            </Grid>
            <Grid item xs={12}>
                <TableComponent books={books} setBooks={setBooks} rows={books} />
            </Grid>
        </Grid>
    );
}

export default App;