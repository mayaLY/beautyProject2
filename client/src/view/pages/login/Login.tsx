import React, { useState } from 'react';
import { loginToDB } from '../../../controllers/users/setUser';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
      }
  
      try {
        const response = await loginToDB(email, password);
        console.log('Login successful:', response);
        navigate('/main');
      } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed.');
      }
    };
  
    return (
      <div className={styles.container}>

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
      </div>
    );
  };
  
  export default Login;