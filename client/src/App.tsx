import { useState } from 'react'
import ProductList from './view/pages/main/Main';
import Register from './view/pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './view/pages/cart/cartPage';
import './App.css'
import AddProductForm from './view/components/addProduct/addProductForm';


const App = () => {
 return (
   
  <Router>
      <div>
        <h1>Cosmetic Shop</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
