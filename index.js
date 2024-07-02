import express from "express"
import { connectDB } from "./db/dbconnection.js"
import bookRouter from "./src/moudles/book/book.routes.js"
import authorRouter from "./src/moudles/author/author.routes.js"

const app = express()
const port = 3000

app.use(express.json())
app.use("/book",bookRouter)
app.use("/author",authorRouter)

connectDB()

app.listen(port, () => console.log(`server is running on port ${port}`)) 