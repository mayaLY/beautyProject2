import React, { useEffect, useState } from 'react';
import { Product } from '../../../model/productModel';
import { getAllProducts } from '../../../controllers/product/getAllProducts';


const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {("http://makeup-api.herokuapp.com/api/v1/products.json")
    
  
    };

    getAllProducts().then((products:Product[])=>{
      setProducts(products);
    });

  }, []);

  return (
    <div className="product-page">
      <h2>Beauty Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-category">{product.category || 'Uncategorized'}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;


