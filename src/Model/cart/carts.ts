import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      productId: {
        type: String, // Match the `productId` type from your `Product` schema
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
