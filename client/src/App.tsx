import { useState } from 'react'
import ProductList from './Components/Product/ProductPage';

const App = () => {
  const [count, setCount] = useState(0); // Using useState to create a state variable

  return (
    <div>
      <h1>Cosmetic Shop</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ProductList />
    </div>
  );
};

export default App