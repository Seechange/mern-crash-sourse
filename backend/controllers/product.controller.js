import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getAllProduct = async(req,res) => {
    try {
        const allProducts = await Product.find({})
        return res.status(200).json({
            success:true,
            data: allProducts
        })
    } catch (error) {
        console.log('err: ', error.message);
        return res.status(400).json({
            success:false,
            errMessage: "fetching product false !!!"
        })
        
    }
}

export const createProduct = async (req, res) => {
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
}

export const updateProduct = async(req, res) => {
    const {id} = req.params
    const product = req.body
    if (!mongoose.Types.ObjectId.isValid){
        return res.status(400).json({
            success:false,
            errMessage: "No product with Id !!!"
        })
    }
    try {
        const updateProduct = await Product.findByIdAndUpdate(id,product,{new: true})
        return res.status(200).json({
            success:true,
            data: updateProduct
        })
    } catch (error) {
        console.log("error: ", error.message)
        return res.status(400).json({
            success:false,
            errMessage: "Update product false !!!"
        })
    }
}

export const deleteProduct = async (req, res) => {
    const productId = req.params.id
    try {
        await Product.findByIdAndDelete(productId)
        return res.status(200).json({
            success:true,
            errMessage: "Delele product success !!! "
        })

    } catch (error) {
        console.log(error.message);
        return res.status(400).json({
            errMessage: "Delete Product false !!!"
        })
    }
}