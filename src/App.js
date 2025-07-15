// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Product';
import Cart from './Components/Cart';
import { Iphone } from './Components/Iphone';
import { Laptop } from './Components/Laptop';
import { Smartphones } from './Components/Smartphones';
// import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light p-3" style={{ backgroundColor: 'DodgerBlue' }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">PIXELLIA</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-white">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-white">Cart</Link>
              </li>
            </ul>

            <form className="d-flex ms-3">
              <input
                className="form-control"
                type="search"
                placeholder="Search electronics, products, dresses"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/smartphones" element={<Smartphones />} />
      </Routes>
    </Router>
  );
}

export default App;
