import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Delivery from './pages/Delivery';
import Contacts from './pages/Contacts';
import ProductDetails from './components/Catalog/ProductDetails';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="about" element={<About />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="*" element={<div className="container" style={{ padding: '2rem' }}><h1>404: Страница не найдена</h1></div>} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
