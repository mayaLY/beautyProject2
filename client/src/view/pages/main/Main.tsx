import React, { useEffect, useState } from 'react';
import { Product } from '../../../model/productModel';
import { getAllProducts } from '../../../controllers/product/getAllProducts';
import { sendProductsToServer } from '../../../controllers/product/getAllProducts';


const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProducts = async () => {

      try {

        const serverProducts = await getAllProducts();

        setIsLoading(false);

      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setIsLoading(false);
      }

    };

    getAllProducts().then((products: Product[]) => {
      setProducts(products);
    });

    fetchProducts();


  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


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
            <p className="product-stock">In Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;


