import { Router } from "express";
import * as authorController from "./author.controllers.js"

const authorRouter = Router();


authorRouter.post("/create",authorController.createAuthor)
authorRouter.get("/get",authorController.getAuthors)
authorRouter.get("/get_withId/:id",authorController.getAuthor_WithID)
authorRouter.patch("/update/:id",authorController.updateAuthor)
authorRouter.delete("/delete/:id",authorController.deleteAuthor)

export default authorRouter