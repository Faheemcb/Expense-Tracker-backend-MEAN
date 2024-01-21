import express from 'express';  // Importing Express.js
import dotenv from 'dotenv';   // Importing Dotenv
import connectDb from './Config/db.js'; // Importing Database Connection
import logger from './Middleware/logger.js';
import NotFoundError from './Exceptions/NotFoundError.js';
import { ErrorHandler } from './Utils/errorHandler.js';

// configuring .env file
dotenv.config({     
    path:"./.env"
})

const app = express()

// Defining Middleware
app.use(express.json())

// Handling unmatched URL'S
app.use("*" , (req , res , next) => {
    const error =  new NotFoundError("Invalid Url")
    next(error)

})

// Global Error Handler
app.use(ErrorHandler)

// Calling Database Connection
connectDb()
.then(() => {
    // After connecting to database, listening to server
    app.listen(process.env.PORT || 4000, () => console.log("Server is up and running"))
})
.catch((err) => {
    logger.error("MongoDB Connection failed",err)

})



