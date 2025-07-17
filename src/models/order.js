//receta de estructura base
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{},
    products:[{}], //es un array
    shippingAddress:{},
    paymentMethod: {},
    shippingCost:{},
    totalPrice:{},
    status:{},
    paymentStatus:{},
    
});

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;