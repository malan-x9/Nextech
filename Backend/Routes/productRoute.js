import express from 'express'
import { addProduct, deleteProduct, getById, getProducts, updateProduct } from '../Controllers/productController.js'

const productRouter = express.Router()

productRouter.post("/addProduct", addProduct);
productRouter.get("/getProducts", getProducts);
productRouter.get("/:id", getById);
productRouter.put("/update/:id",updateProduct);
productRouter.delete("/delete/:id", deleteProduct);




export default productRouter
