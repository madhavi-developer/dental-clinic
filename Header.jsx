import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="header">
      <h1>DentalCare+</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}