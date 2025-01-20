import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
dotenv.config();   

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});

const app = express();  // create express app

app.listen(3000, () => { // listen for requests
  console.log('Server is running on port 3000');
});





// mongodb+srv://herewas2001:N3kggmcJlUXxZzGp@mern-estate.tan3x.mongodb.net/