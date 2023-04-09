import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex gap-5 text-xl'>
            <Link to="/">Home</Link>
            <Link to="/orders">Order Review</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;