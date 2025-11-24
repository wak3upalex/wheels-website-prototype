import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Truck, Shield } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Вернуться в каталог
                </button>
            </div>
        );
    }

    const cartItem = cartItems.find(item => item.id === product.id);

    const handleIncrease = () => {
        updateQuantity(product.id, cartItem.quantity + 1);
    };

    const handleDecrease = () => {
        if (cartItem.quantity > 1) {
            updateQuantity(product.id, cartItem.quantity - 1);
        } else {
            removeFromCart(product.id);
        }
    };

    // ... (rest of the component logic)

    return (
        <div className="container mx-auto px-4 py-8 pb-16">
            {/* ... (previous JSX) */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* ... (image section) */}
                <div className="bg-white rounded-lg border border-border p-8 flex items-center justify-center h-[300px] lg:h-[500px]">
                    <div className="h-full flex items-center justify-center">
                        <img src={product.image} alt={`${product.brand} ${product.model}`} className="max-h-full max-w-full object-contain" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-primary mb-2 leading-tight">{product.brand} {product.model}</h1>
                    <div className="flex gap-6 mb-8 text-sm text-text-muted">
                        <span>Артикул: {product.id.toString().padStart(6, '0')}</span>
                        <span className={`font-semibold ${product.inStock ? 'text-success' : 'text-text-muted'}`}>
                            {product.inStock ? 'В наличии' : 'Нет в наличии'}
                        </span>
                    </div>

                    <div className="mb-8">
                        <span className="text-4xl font-extrabold text-text">{product.price.toLocaleString('ru-RU')} ₽</span>
                    </div>

                    <div className="mb-12">
                        {product.inStock ? (
                            cartItem ? (
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-background rounded-md border border-border p-1">
                                        <button
                                            className="w-12 h-12 flex items-center justify-center rounded-md bg-white shadow-sm text-text hover:text-accent disabled:opacity-50 text-xl"
                                            onClick={handleDecrease}
                                        >
                                            -
                                        </button>
                                        <span className="font-bold text-2xl w-16 text-center">{cartItem.quantity}</span>
                                        <button
                                            className="w-12 h-12 flex items-center justify-center rounded-md bg-white shadow-sm text-text hover:text-accent text-xl"
                                            onClick={handleIncrease}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="btn btn-primary py-4 px-8 text-lg flex items-center justify-center gap-2"
                                        onClick={() => navigate('/cart')}
                                    >
                                        <ShoppingCart size={24} />
                                        Перейти в корзину
                                    </button>
                                </div>
                            ) : (
                                <button className="btn btn-primary w-full py-4 text-lg flex items-center justify-center gap-4" onClick={() => addToCart(product)}>
                                    <ShoppingCart size={24} />
                                    Добавить в корзину
                                </button>
                            )
                        ) : (
                            <button className="btn btn-secondary w-full py-4 text-lg flex items-center justify-center gap-4 opacity-70 cursor-not-allowed bg-gray-200 text-gray-500 border-gray-300" disabled>
                                Нет в наличии
                            </button>
                        )}
                    </div>

                    {/* ... (rest of the component) */}

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-6 text-primary">Характеристики</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between pb-2 border-b border-border">
                                <span className="text-text-muted">Бренд</span>
                                <span className="font-semibold text-text">{product.brand}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-border">
                                <span className="text-text-muted">Модель</span>
                                <span className="font-semibold text-text">{product.model}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-border">
                                <span className="text-text-muted">Размер</span>
                                <span className="font-semibold text-text">{product.size}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-border">
                                <span className="text-text-muted">Посадочный диаметр</span>
                                <span className="font-semibold text-text">R{product.diameter}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-border">
                                <span className="text-text-muted">Ось</span>
                                <span className="font-semibold text-text">
                                    {product.axis === 'steer' ? 'Рулевая' :
                                        product.axis === 'drive' ? 'Ведущая' :
                                            product.axis === 'trailer' ? 'Прицепная' : 'Универсальная'}
                                </span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-border">
                                <span className="text-text-muted">Сезонность</span>
                                <span className="font-semibold text-text">
                                    {product.season === 'winter' ? 'Зимние' :
                                        product.season === 'summer' ? 'Летние' : 'Всесезонные'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="my-8 p-6 bg-white rounded-md border border-border">
                        <h3 className="text-xl font-bold mb-4 text-primary">Описание</h3>
                        <p className="leading-relaxed text-text">{product.description}</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4 items-start">
                            <Truck size={24} className="text-accent flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold mb-1">Быстрая доставка</h4>
                                <p className="text-sm text-text-muted">Отправляем в день заказа</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Shield size={24} className="text-accent flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold mb-1">Гарантия качества</h4>
                                <p className="text-sm text-text-muted">Сертифицированная продукция</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
