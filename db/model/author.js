import { Schema,model } from "mongoose";

/**
    • name (String, required)
    • bio (String)
    • birthDate (Date)
    • books (Array of ObjectIds referencing Book model)
 */

const authorSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    birthDate:{
        type:Date
    },
    books:[{
        type:Schema.Types.ObjectId,
        ref:"Book"
    }]
})

export const Author = model('Author',authorSchema)