import { Book } from "../../../db/model/book.js";


/**
 * • POST request to create a new book.
    • GET request to retrieve all books.
    • GET request to retrieve a single book by its ID.
    • PATCH request to update a book by its ID.
    • DELETE request to delete a book by its ID.
 */
export const createBook = async (req, res) => { 
    try {   
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
}  

export const getBook_WithID = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);;
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const updateBook = async (req, res) => {
    const { id } = req.params;
    const bookData = req.body
    try{
        const updatedBook = await Book.findByIdAndUpdate(id, bookData, {new: true});
        res.status(200).json(updatedBook);
    }catch(error){
        res.status(500).json(error);
    }
}


export const deleteBook = async (req, res) => {
    const {id} = req.params
    try{
        const deletedBook = await Book.findByIdAndDelete(id);
        res.status(200).json(deletedBook);
    }catch(error){
        res.status(500).json(error);
    }
}