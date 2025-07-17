//receta de estructura base
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        min:0,
    },
    stock:{
        type: Number,
        required: true,
        min:0,
    },
    imagesUrl:[{ //array de un objeto
        type: String,
        default: 'https://placehold.co/800x600.png', //url fake temporal

    }],
    category:{ // para poder filtar los productos
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
 });

const Product = mongoose.model('Product',productSchema);

module.exports = Product;