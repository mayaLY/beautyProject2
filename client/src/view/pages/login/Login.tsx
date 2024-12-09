import { useState } from "react";
import { loginToDB } from "../../../controllers/users/setUser";
import  Style  from "./Login.mofule.scss";


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await loginToDB(email, password);
        console.log('Login successful:', response);
      } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed.');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  };
  
  export default Login;