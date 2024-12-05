// Add product to cart
const handleAddToCart = async (productId: string) => {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ productId, quantity: 1 }),
    });
    if (response.ok) {
      alert('Product added to cart!');
    } else {
      alert('Failed to add product to cart');
    }
  };

  export { handleAddToCart };