import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl font-bold">Ваша корзина пуста</h2>
                <p className="text-text-muted">Перейдите в каталог, чтобы выбрать шины.</p>
                <Link to="/" className="btn btn-primary">Перейти в каталог</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 pb-16">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mt-6">
                <div className="flex flex-col gap-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr_auto_auto_auto] items-center gap-4 sm:gap-8 bg-white p-4 rounded-lg border border-border">
                            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-slate-100 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 row-span-3 sm:row-span-1">
                                <img src={item.image} alt={item.model} className="max-h-full object-contain" />
                            </div>

                            <div className="col-span-1 sm:col-auto">
                                <h3 className="text-lg font-semibold mb-1 text-primary">{item.brand} {item.model}</h3>
                                <p className="text-text-muted text-sm">{item.width}/{item.profile} R{item.diameter}</p>
                                <div className="block sm:hidden font-bold text-accent mt-1">
                                    {item.price.toLocaleString('ru-RU')} ₽
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-background p-1 rounded-md w-fit col-span-1 sm:col-auto">
                                <button
                                    className="w-7 h-7 flex items-center justify-center rounded-sm text-text hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="font-medium min-w-[20px] text-center">{item.quantity}</span>
                                <button
                                    className="w-7 h-7 flex items-center justify-center rounded-sm text-text hover:bg-white hover:shadow-sm transition-colors"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="font-bold text-lg text-text min-w-[100px] text-right hidden sm:block">
                                {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                            </div>

                            <button
                                className="text-text-muted hover:text-danger transition-colors p-2 justify-self-end sm:justify-self-start col-start-2 sm:col-auto row-start-1 sm:row-auto"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="lg:sticky lg:top-[100px] h-fit">
                    <div className="bg-white p-6 rounded-lg border border-border">
                        <h3 className="mb-6 text-xl font-semibold">Итого</h3>
                        <div className="flex justify-between mb-4 text-text-muted">
                            <span>Товары ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} шт.)</span>
                            <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <div className="flex justify-between mt-6 pt-6 border-t border-border font-extrabold text-xl mb-6">
                            <span>К оплате:</span>
                            <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <button
                            className="btn btn-primary w-full py-3"
                            onClick={() => navigate('/checkout')}
                        >
                            Перейти к оформлению
                        </button>
                        <Link to="/" className="flex items-center justify-center gap-2 mt-4 text-text-muted text-sm hover:text-accent transition-colors">
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
