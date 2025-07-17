//receta de estructura base
import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    isRead:{
        type: Boolean,
        default: false,
    },
});

const Notification = mongoose.model('Notification',notificationSchema);

module.exports = Notification;