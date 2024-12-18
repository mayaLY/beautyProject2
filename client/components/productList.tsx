import React, { useEffect, useState } from 'react';

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  image_link: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3006/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          {product.image_link && <img src={product.image_link} alt={product.name} width="100" />}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
