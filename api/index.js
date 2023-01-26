import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

// CONNECT TO THE DATABASE
mongoose.set('strictQuery', true);
const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        throw err;
    })
}

app.listen("5000", () => {
    connect();
    console.log("listening on 5000");
});