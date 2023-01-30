import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRouter from './routes/posts.js';
import categoryRouter from './routes/categories.js';
import multer from "multer";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

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

// FILE UPLOAD
const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, "images");
    },
    filename: (req, res, callback) => {
        callback(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File hase been uploaded");
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRouter);
app.use('/api/categories', categoryRouter);

app.listen("5000", () => {
    connect();
    console.log("listening on 5000");
});