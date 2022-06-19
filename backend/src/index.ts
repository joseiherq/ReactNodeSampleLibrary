
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import Router from './routes/routes'

const app = express(); 
const PORT = 4000; 

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

new Router(app);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});