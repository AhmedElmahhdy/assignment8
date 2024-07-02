import mongoose from "mongoose";

const uri = 'mongodb://127.0.0.1:27017/Assignment_8';

export const connectDB = async () => {
    await mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to the MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
}