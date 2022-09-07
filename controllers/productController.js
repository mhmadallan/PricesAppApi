
const mongoose = require('mongoose')
const Product = require('../models/productModel')


// get all products
const getAllProducts = async (req,res) => {
    const products = await Product.find({});
    res.status(200).json(products)
}

//get a single product
const getProduct = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"no such Product"})
    }

    const product = await Product.findById(id)
    if(!product){
        res.status(404).json({error:"no such product"})
    }

    res.status(200).json(product)
}

//post a new product
const createProduct = async(req,res) => {
    const {name,price,category,market} = req.body
    
    try{
        const product = await Product.create({name,price,category,market})
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a product
const deleteProduct = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"no such Product"})
    }

    const product = await Product.findOneAndDelete({_id:id})
    if(!product){
        res.status(404).json({error:"no such product"})
    }

    res.status(200).json(product)
}

//update a product
const updateProduct = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"no such Product"})
    }

    const product = await Product.findByIdAndUpdate({_id:id},{...req.body})
    if(!product){
        res.status(404).json({error:"no such product"})
    }

    res.status(200).json(product)

}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}