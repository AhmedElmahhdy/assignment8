import { Author } from "../../../db/model/author.js";

// • POST request to create a new author.
// • GET request to retrieve all authors.
// • GET request to retrieve a single author by its ID.
// • PATCH request to update an author by its ID.
// • DELETE request to delete an author by its ID.


export const createAuthor = async (req, res) => {
    try {
        const newAuthor = new Author(req.body);
        const savedAuthor = await newAuthor.save();
        res.status(200).json(savedAuthor);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getAuthor_WithID = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const updateAuthor = async (req,res)=>{
    const {id} = req.params
    const authorData = req.body
    try{
        const updatedAuthor = await Author.findByIdAndUpdate(id, authorData, {new: true});
        res.status(200).json(updatedAuthor);
    }catch(error){
        res.status(500).json(error);
    }   
}


export const deleteAuthor = async (req,res)=>{
    const {id} = req.params
    try{
        const deletedAuthor = await Author.findByIdAndDelete(id);
        res.status(200).json(deletedAuthor);
    }catch(error){
        res.status(500).json(error);
    }
}