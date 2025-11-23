import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Phone, Search, Menu, X, MapPin, Clock } from 'lucide-react';
import './Header.css';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar - Dark & Compact */}
            <div className="header-top">
                <div className="container header-top-content">
                    <div className="top-info-group">
                        <div className="info-item">
                            <MapPin size={14} />
                            <span>Санкт-Петербург</span>
                        </div>
                        <div className="info-item">
                            <Clock size={14} />
                            <span>Пн-Пт: 9:00 - 18:00</span>
                        </div>
                    </div>
                    <div className="top-links">
                        <Link to="/about">О компании</Link>
                        <Link to="/delivery">Доставка и оплата</Link>
                        <Link to="/contacts">Контакты</Link>
                    </div>
                </div>
            </div>

            {/* Main Header - Sticky & Glassy */}
            <div className="header-main">
                <div className="container header-main-content">
                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className="logo">
                        <img src="/assets/logo.png" alt="СИЛА МАШИН" className="logo-image" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <Link to="/" className="nav-link">Каталог</Link>
                        <Link to="/about" className="nav-link">О компании</Link>
                        <Link to="/delivery" className="nav-link">Доставка</Link>
                    </nav>



                    {/* Actions: Phone & Cart */}
                    <div className="header-actions">
                        <a href="tel:+78127678557" className="phone-btn">
                            <div className="phone-icon">
                                <Phone size={20} />
                            </div>
                            <div className="phone-text">
                                <span className="phone-number">+7 (812) 767-85-57</span>

                            </div>
                        </a>

                        <Link to="/cart" className="cart-btn">
                            <div className="cart-icon-wrapper">
                                <ShoppingCart size={24} />
                                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav">
                    <Link to="/" onClick={toggleMenu}>Каталог</Link>
                    <Link to="/about" onClick={toggleMenu}>О компании</Link>
                    <Link to="/delivery" onClick={toggleMenu}>Доставка и оплата</Link>
                    <Link to="/contacts" onClick={toggleMenu}>Контакты</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
