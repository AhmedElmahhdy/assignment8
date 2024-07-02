import { Router } from "express";
import * as bookController from "./book.controller.js"

const bookRouter = Router();

bookRouter.post("/create",bookController.createBook)
bookRouter.get("/get",bookController.getBooks)
bookRouter.get("/get_id/:id",bookController.getBook_WithID)
bookRouter.patch("/updatebook/:id",bookController.updateBook)
bookRouter.delete("/deletebook/:id",bookController.deleteBook)

export default bookRouter