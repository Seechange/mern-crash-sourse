import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import productRouter from "./routes/product.route.js"

const app = express()
dotenv.config()

const PORT = process.env.PORT
app.use(express.json() )

app.use('/api/products',productRouter)

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT );
})

