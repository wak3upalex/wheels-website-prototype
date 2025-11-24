import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Phone, Menu, X, MapPin, Clock } from 'lucide-react';
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
        <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            {/* Top Bar - Dark & Compact */}
            <div className={`bg-primary text-white/90 text-sm py-2 transition-all duration-300 ${isScrolled ? 'h-0 p-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'} hidden md:block`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            <span>Санкт-Петербург</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>Пн-Пт: 9:00 - 18:00</span>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <Link to="/about" className="hover:text-accent transition-colors">О компании</Link>
                        <Link to="/delivery" className="hover:text-accent transition-colors">Доставка и оплата</Link>
                        <Link to="/contacts" className="hover:text-accent transition-colors">Контакты</Link>
                    </div>
                </div>
            </div>

            {/* Main Header - Sticky & Glassy */}
            <div className="py-4 border-b border-gray-100">
                <div className="container mx-auto px-4 flex items-center justify-between gap-8">
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-text" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className="block">
                        <img src="/assets/logo.png" alt="СИЛА МАШИН" className="h-11 w-auto block" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-8">
                        <Link to="/" className="font-semibold text-text relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Каталог</Link>
                        <Link to="/about" className="font-semibold text-text relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">О компании</Link>
                        <Link to="/delivery" className="font-semibold text-text relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Доставка</Link>
                    </nav>

                    {/* Actions: Phone & Cart */}
                    <div className="flex items-center gap-8">
                        <a href="tel:+78127678557" className="flex items-center gap-3 text-text group no-underline">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent transition-transform group-hover:scale-110">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col hidden lg:flex">
                                <span className="font-bold text-base leading-tight">+7 (812) 767-85-57</span>
                            </div>
                        </a>

                        <Link to="/cart" className="relative text-text hover:text-accent transition-colors">
                            <div className="relative">
                                <ShoppingCart size={24} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-accent text-white text-[0.7rem] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white z-[999] p-20 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col gap-6 text-xl font-semibold">
                    <Link to="/" onClick={toggleMenu} className="text-text pb-2 border-b border-border">Каталог</Link>
                    <Link to="/about" onClick={toggleMenu} className="text-text pb-2 border-b border-border">О компании</Link>
                    <Link to="/delivery" onClick={toggleMenu} className="text-text pb-2 border-b border-border">Доставка и оплата</Link>
                    <Link to="/contacts" onClick={toggleMenu} className="text-text pb-2 border-b border-border">Контакты</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
