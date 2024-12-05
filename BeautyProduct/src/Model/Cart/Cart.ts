const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    ProductId: { type: String, required: true },
    quantity: { type: Number, required: true },
    userId: { type: String, required: true },
    Status: { type: Boolean, required: true, default: false },
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;
