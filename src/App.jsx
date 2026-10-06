import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import Navbar from './Navbar';

function App() {
  // which page we're on: home, plants or cart
  const [page, setPage] = useState('home');

  if (page === 'plants') {
    return <ProductList onNavigate={setPage} />;
  }

  if (page === 'cart') {
    return <CartItem onNavigate={setPage} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-hero">
          <h1>Paradise Nursery</h1>
          <p className="landing-tagline">Where green meets serenity</p>
          <button className="get-started-btn" onClick={() => setPage('plants')}>
            Get Started
          </button>
        </div>
        <div className="landing-about">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default App;
