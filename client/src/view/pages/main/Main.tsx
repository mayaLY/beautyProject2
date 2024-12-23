import React, { useEffect, useState } from 'react';
import { Product } from '../../../model/productModel';
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Main.module.scss';
import { getAllProducts } from '../../../controllers/product/getAllProducts';
import Logo from '../logo/Logo';
import { deleteProduct } from '../../../controllers/product/deleteProduct';


// import { sendProductsToServer } from '../../../controllers/product/getAllProducts';



const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [Cart, setCart] = useState<Product[]>([]);


  useEffect(() => {
    // Fetch user name from local storage
    const name = localStorage.getItem('username');
    if (name) setUserName(name);

    try {
      // Fetch both general and specific products
      getAllProducts().then(products => {
        console.log('Products:', products)
        setProducts(products)
      })     // Combine both lists of products

      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products');
      setIsLoading(false);
    }

  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleDelete = async (productId: string | undefined) => {
    if (!productId) return; try {
      await deleteProduct(productId);
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Failed to delete product');
    }
  };

  const repopulateProducts = async () => {
    try {
      const response = await fetch('http://localhost:3006/api/products/populate-from-api');
      if (!response.ok) {
        throw new Error('Failed to repopulate products');
      }
      window.location.reload();
    } catch (error) {
      console.error('Error repopulating products:', error);
      setError('Failed to repopulate products');
    }
  };



  return (
    <div>
      <div>
        <Logo />
      </div>
      <nav className={styles.main}>
        <Link to="element-Login" className={styles.link}>log in</Link>
        <Link to="element-Register" className={styles.link}>register</Link>
        <Link to="element-AddProduct" className={styles.link}>Add product</Link>
        <Link to="element-Cart" className={styles.link}>Cart</Link>
        <button
          className={styles.repopulateButton}
          onClick={repopulateProducts}
        >
          Repopulate Products
        </button>
      </nav>
      <div>
        {userName ? <h1>Hello, {userName}!</h1> : <h1>Welcome to our app!</h1>}
      </div>

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
                <img src={product.image_link} alt={product.name} className={styles['product-image']} />
                <h3>{product.name}</h3>
                <p className={styles['product-category']}>{product.category || 'Uncategorized'}</p>
                <p className={styles['product-description']}>{product.description}</p>
                <p className={styles['product-price']}>${product.price}</p>
                <p className={styles['product-stock']}>In Stock: {product.stock}</p>
                <button className={styles['add-to-cart-button']} onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
                <button
                  className={styles['delete-button']}
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;


