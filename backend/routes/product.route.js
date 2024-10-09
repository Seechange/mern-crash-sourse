import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router()
router.get("/", getAllProduct)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)
export default router