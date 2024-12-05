const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    userId: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;
