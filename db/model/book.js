import {Schema, model} from "mongoose";
import { connectDB } from "../dbconnection.js";

/**
 * • title (String, required)
    • content (String, required)
    • author (String, required)
    • publishedDate (Date, default to the current date)
*/

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
})

export const Book = model('Book', bookSchema)
