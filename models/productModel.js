const mongoose = require('mongoose');

const Schema = mongoose.Schema

// defining the srtucture of the collection in the db
const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    market:{
        type:String,
        required:true
    }
},{ timestamps:true })

// this line to create a model out of the structure that we created the model is to manipulate the data 
module.exports = mongoose.model('Product',productSchema)