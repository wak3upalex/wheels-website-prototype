import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (cartItems.length === 0 && !isSubmitted) {
        navigate('/');
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log('Order submitted:', { ...formData, items: cartItems, total: totalPrice });
        setIsSubmitted(true);
        clearCart();
    };

    if (isSubmitted) {
        return (
            <div className="container checkout-success">
                <CheckCircle size={64} color="var(--color-success)" />
                <h1>Заказ успешно оформлен!</h1>
                <p>Спасибо за ваш заказ, {formData.name}.</p>
                <p>Наш менеджер свяжется с вами по телефону {formData.phone} в ближайшее время для подтверждения деталей.</p>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Вернуться в каталог
                </button>
            </div>
        );
    }

    return (
        <div className="container checkout-page">
            <h1>Оформление заказа</h1>

            <div className="checkout-layout">
                <div className="checkout-form-section">
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="name">Ваше имя *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Иван Иванов"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Телефон *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+7 (999) 000-00-00"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ivan@example.com"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">
                            Подтвердить заказ
                        </button>
                        <p className="form-note">Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.</p>
                    </form>
                </div>

                <div className="checkout-summary">
                    <div className="summary-card">
                        <h3>Ваш заказ</h3>
                        <div className="summary-items-list">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="summary-item-info">
                                        <span className="summary-item-name">{item.brand} {item.model}</span>
                                        <span className="summary-item-qty">{item.quantity} шт.</span>
                                    </div>
                                    <span className="summary-item-price">{(item.price * item.quantity).toLocaleString('ru-RU')} ₽</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-total">
                            <span>Итого к оплате:</span>
                            <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
