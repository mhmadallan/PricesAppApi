const express = require('express');
const Product = require('../models/productModel')
const {getAllProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/productController')

const router = express.Router();

// get all products
router.get('/',getAllProducts)

// get a single product
router.get('/:id',getProduct)

//post a new product
router.post('/', createProduct)

//delete a product
router.delete('/:id',deleteProduct)

//update a product
router.patch('/:id',updateProduct)

module.exports = router