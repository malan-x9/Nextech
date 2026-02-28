//Add Product To Database
import Product from "../Models/productModel.js";

export const addProduct = async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    let product;
    try{
        product = new Product({
            name,
            description,
            price,
            imageUrl
        });
        await product.save();
       
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error });
    }

    if (!product) {
        return res.status(500).json({ message: "Unable to add product" });
    }
    return res.status(201).json({ product });
}

export const getProducts = async (req, res, next) => {
    let products;
  try{
    products = await Product.find()
  }
    catch(err){
        console.log(err);
    }

    if(!products){
        return res.status(404).json({message: "No product Found"})
    }
    else{
        return res.status(200).json({products})
    }
}

export const getById = async (req, res, next) => {
    const id = req.params.id
    let product;
    try{
        product = await Product.findById(id);}
    catch(err){
        console.log(err);
    }

    if(!product){
        return res.status(404).json({message: "No product Found"})
    }
    else{
        return res.status(200).json({product})
    }
}

export const updateProduct = async (req, res, next) => {
    const id = req.params.id
    const { name, description, price, imageUrl } = req.body;
    let product;
    try{
        product = await Product.findByIdAndUpdate(id, {
            name,
            description,
            price,
            imageUrl
        })
        product = await product.save()
    }
    catch(err){
        console.log(err);
    }

    if(!product){
        return res.status(404).json({message: "Unable To Update By this ID"})
    }
    else{
        return res.status(200).json({product})
    }
}

export const deleteProduct = async (req, res, next) => {
    const id = req.params.id
    let product;
    try{
        product = await Product.findByIdAndDelete(id);
    }
    catch(err){
        console.log(err);
    }

    if(!product){
        return res.status(404).json({message: "Unable To Delete By this ID"})
    }
    else{
        return res.status(200).json({message: "Product Successfully Deleted"})
    }
}