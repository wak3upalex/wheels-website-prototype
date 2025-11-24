import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';

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
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-success" size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-success">Заказ успешно оформлен!</h2>
                <p className="text-text-muted mb-8 text-lg">
                    Спасибо за ваш заказ. Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
                </p>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Вернуться в каталог
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 pb-16">
            <h1 className="text-3xl font-bold mb-6">Оформление заказа</h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 mt-6">
                <div className="order-2 lg:order-1">
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-border">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 font-medium text-text">Ваше имя *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Иван Иванов"
                                className="w-full p-3 border border-border rounded-md text-base outline-none transition-colors focus:border-accent"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="phone" className="block mb-2 font-medium text-text">Телефон *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+7 (999) 000-00-00"
                                className="w-full p-3 border border-border rounded-md text-base outline-none transition-colors focus:border-accent"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 font-medium text-text">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ivan@example.com"
                                className="w-full p-3 border border-border rounded-md text-base outline-none transition-colors focus:border-accent"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full py-3 text-lg">
                            Подтвердить заказ
                        </button>
                        <p className="mt-4 text-xs text-text-muted text-center">Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.</p>
                    </form>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="bg-white p-6 rounded-lg border border-border sticky top-[100px]">
                        <h3 className="mb-6 text-xl font-semibold">Ваш заказ</h3>
                        <div className="mb-6 border-b border-border pb-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between mb-2 text-sm">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{item.brand} {item.model}</span>
                                        <span className="text-text-muted text-xs">{item.quantity} шт.</span>
                                    </div>
                                    <span className="font-semibold">{(item.price * item.quantity).toLocaleString('ru-RU')} ₽</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between font-extrabold text-xl">
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
