import React, { useState } from 'react';
import './logo.scss'
import logo from '../../../assets/logo.png';


const Logo: React.FC = () => {
    return (
        <div className='banner'>
            <img src={logo} alt="logo" />
            <h1>beauty</h1>
        </div>
    )
}
export default Logo
