//receta de estructura base
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
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
    imageUrl:{
        type: String,
        default:'https://placehold.co/800x600.png', //fake
    },
    parentCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', //relacion con su propia tabla
        default: null,
    },
});

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;