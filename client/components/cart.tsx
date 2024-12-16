import React, { useState, useEffect } from 'react';
import { getCart, addToCart, deleteFromCart, updateCart } from '../src/controllers/cart/cartService';
import { Cart } from '../src/model/cartModel'; // Import your Cart 

const Cart = ({ userId }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProductId, setNewProductId] = useState('');
  const [newQuantity, setNewQuantity] = useState(1);

  // Fetch Cart on Component Mount
  useEffect(() => {
    fetchCart();
  }, [userId]);

//fetch cart//
  const fetchCart = async () => {
    try {
      const cartData = await getCart(userId);
      setCart(cartData);
      setLoading(true);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Add to Cart
  const handleAddToCart = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    try {
      const updatedCart = await addToCart(userId, newProductId, newQuantity);
      setCart(updatedCart);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleDeleteFromCart = async (productId: string) => {
    try {
      const updatedCart = await deleteFromCart(userId, productId);
      setCart(updatedCart);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateCart = async (productId: string, quantity: number) => {
    try {
      const updatedCart = await updateCart(userId, productId, quantity);
      setCart(updatedCart);
    } catch (error) {
      setError(error.message);
    }
  };
  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>{error}</p>;

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      
      {/* Add-to-Cart Form */}
      <div>
        <h3>Add Product to Cart</h3>
        <input
          type="text"
          placeholder="Product ID"
          value={newProductId}
          onChange={(e) => setNewProductId(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={newQuantity}
          onChange={(e) => setNewQuantity(parseInt(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {/* Cart Items */}
      {cart && cart.items.length > 0 ? (
        <ul>
          {cart.items.map((item: any) => (
            <li key={item.productId}>
              <img src={item.image} alt={item.name} width="50" />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleDeleteFromCart(item.productId)}>Remove</button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateCart(item.productId, parseInt(e.target.value))}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      
      <h3>Total Price: ${cart?.totalPrice}</h3>
    </div>
  );
};

export default Cart;