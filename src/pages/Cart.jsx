import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="container cart-empty">
                <h2>Ваша корзина пуста</h2>
                <p>Перейдите в каталог, чтобы выбрать шины.</p>
                <Link to="/" className="btn btn-primary">Перейти в каталог</Link>
            </div>
        );
    }

    return (
        <div className="container cart-page">
            <h1>Корзина</h1>

            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.model} />
                            </div>

                            <div className="cart-item-info">
                                <h3>{item.brand} {item.model}</h3>
                                <p className="cart-item-specs">{item.width}/{item.profile} R{item.diameter}</p>
                                <div className="cart-item-price-mobile">
                                    {item.price.toLocaleString('ru-RU')} ₽
                                </div>
                            </div>

                            <div className="cart-item-quantity">
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    <Minus size={16} />
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="cart-item-price">
                                {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <div className="summary-card">
                        <h3>Итого</h3>
                        <div className="summary-row">
                            <span>Товары ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} шт.)</span>
                            <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <div className="summary-total">
                            <span>К оплате:</span>
                            <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <button
                            className="btn btn-primary btn-block"
                            onClick={() => navigate('/checkout')}
                        >
                            Перейти к оформлению
                        </button>
                        <Link to="/" className="continue-shopping">
                            <ArrowLeft size={16} />
                            Продолжить покупки
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
