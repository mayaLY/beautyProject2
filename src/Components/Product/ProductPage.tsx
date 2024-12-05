import React, { useEffect, useState } from 'react';

function ProductPage() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch products from the server using fetch
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); // Set products to state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <h2>Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
