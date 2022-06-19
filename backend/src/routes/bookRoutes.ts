import express from "express";
import BookController from "../controllers/bookController";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    const bookController = new BookController();
    bookController.getAllBooks(req, res);
});

//Implemented but not used in frontend, cloud be tested using postman
router.get("/:bookIsbn", (req: express.Request, res: express.Response) => {
    const bookController = new BookController();
    bookController.getOneBook(req, res);
});

router.post("/", (req: express.Request, res: express.Response) => {
    const bookController = new BookController();
    bookController.createNewBook(req, res);
});

//Implemented but not used in frontend, cloud be tested using postman
router.put("/:bookIsbn", (req: express.Request, res: express.Response) => {
    const bookController = new BookController();
    bookController.updateOneBook(req, res);
});

router.delete("/:bookIsbn", (req: express.Request, res: express.Response) => {
    const bookController = new BookController();
    bookController.deleteOneBook(req, res);
});

export default router;