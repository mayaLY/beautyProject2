import React, { useEffect, useState } from 'react';
import { Product } from '../../../model/productModel';
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Main.module.scss';
import { getAllProducts } from '../../../controllers/product/getAllProducts';
import Logo from '../logo/Logo';
// import { sendProductsToServer } from '../../../controllers/product/getAllProducts';


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




  return (
    <div>
      <div>
        <Logo />
      </div>
      <nav className={styles.main}>
        <Link to="element-Login" className={styles.link}>log in</Link>
        <Link to="element-Register" className={styles.link}>register</Link>
      </nav>

      <div className="element">
        <Outlet />
      </div>


      {isLoading ? (
        <div>Loading products...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (

        <div className={styles['product-page']}>
          <h2>Beauty Products</h2>
          <div className={styles['product-grid']}>
            {products.map((product) => (
              <div key={product._id} className={styles['product-card']}>
                <img src={product.image} alt={product.name} className={styles['product-image']} />
                <h3>{product.name}</h3>
                <p className={styles['product-category']}>{product.category || 'Uncategorized'}</p>
                <p className={styles['product-description']}>{product.description}</p>
                <p className={styles['product-price']}>${product.price}</p>
                <p className={styles['product-stock']}>In Stock: {product.stock}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;


