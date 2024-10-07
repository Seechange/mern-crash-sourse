import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";


const app = express()
dotenv.config()
app.use(express.json() )

app.post("/api/products", async (req, res) => {
    const products = req.body

    if(!products.name || !products.price || !products.image){
        return res.status(400).json({
            success: false,
            errMessage : "Please provide all fills"
        })
    }

    const newProduct = new Product(products)

    try {
        await newProduct.save()
        return res.status(200).json({
            success: true,
            errMessage:"Create product is successfull !!!!",
            data: newProduct
        })
    } catch (error) {
        console.error(error.message)
        return res.status(400).json({
            success:false,
            errMessage: "Create product dont success !!!!"
        })
    }
})

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})

