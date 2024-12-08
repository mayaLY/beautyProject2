import Cart from '../../model/cart/carts';

// const handleAddToCart = async (productId: string) => {
//     const response = await fetch('/api/cart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify({ productId, quantity: 1 }),
//     });
//     if (response.ok) {
//       alert('Product added to cart!');
//     } else {
//       alert('Failed to add product to cart');
//     }
//   };

//   export { handleAddToCart };

export const addToCart = async (req:any, res:any) => {
  try {
    const cartItem = await Cart.create(req.body);
    res.status(201).json({ message: "Item added to cart!", cartItem });
  } catch (error:any) {
    res.status(400).json({ message: `Bad Request ${error.message} ` });
  }
};

export const getCart = async (req:any, res:any) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId });
    res.json(cartItems);
  } catch (error:any) {
    res.status(400).json({ message: `Bad Request ${error.message} ` });
  }
};