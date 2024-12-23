import React, { useState } from 'react';
import styles from './addProduct.module.scss';



interface Product {
  name: string;
  brand: string;
  price: number;
  image_link: string;
  category: string;
}

const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    brand: '',
    price: 0,
    image_link: '',
    category: '',
  });
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.brand) {
      setMessage('Please fill out all required fields.');
      return;
    }  

    try {
      const response = await fetch('http://localhost:3006/api/products/add-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setMessage('Product added successfully!');
        setProduct({ name: '', brand: '', price: 0, image_link: '', category: '' });
      } else {
        setMessage('Failed to add product.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  return (
    <div className ={styles.container}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image_link"
          placeholder="Image Link"
          value={product.image_link}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProductForm;
