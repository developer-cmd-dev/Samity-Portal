import express from "express";
import app from './app.js'
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// @ts-ignore
mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(3000,()=>console.log("Server is running on port 3000"));
    }).catch(err => console.log(err));



