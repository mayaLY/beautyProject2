import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    userId: { type: String, required: true },
});

const Cart = mongoose.model('cart', CartSchema);

export default Cart;