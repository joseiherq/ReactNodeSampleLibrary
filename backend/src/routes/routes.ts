import bookRouter from "./bookRoutes";

class Router {
    constructor(app) {
        app.use("/api/books", bookRouter);
    }
}

export default Router;