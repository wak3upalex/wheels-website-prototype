import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
    const cartItem = cartItems.find(item => item.id === product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
    };

    const handleIncrease = (e) => {
        e.stopPropagation();
        updateQuantity(product.id, cartItem.quantity + 1);
    };

    const handleDecrease = (e) => {
        e.stopPropagation();
        if (cartItem.quantity > 1) {
            updateQuantity(product.id, cartItem.quantity - 1);
        } else {
            removeFromCart(product.id);
        }
    };

    return (
        <div className={`bg-white border border-border rounded-lg overflow-hidden transition-all duration-200 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-accent ${!product.inStock ? 'opacity-85' : ''}`}>
            <div className={`relative h-[200px] bg-slate-100 flex items-center justify-center overflow-hidden ${!product.inStock ? 'grayscale opacity-70' : ''}`}>
                <img src={product.image} alt={`${product.brand} ${product.model}`} className="max-h-full object-contain" />
                <div className="absolute top-2.5 right-2.5 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {product.season === 'winter' ? '❄️ Зима' : product.season === 'summer' ? '☀️ Лето' : '🌤 Всесезон'}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="mb-2">
                    <h3 className="text-lg font-bold mb-1 text-primary">{product.brand} {product.model}</h3>
                    <span className={`text-xl font-extrabold ${!product.inStock ? 'text-text-muted' : 'text-accent'}`}>{product.price.toLocaleString('ru-RU')} ₽</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-text-muted bg-background p-2 rounded-md">
                    <div className="flex flex-col">
                        <span className="text-[0.7rem] uppercase tracking-wider">Размер:</span>
                        <span className="font-semibold text-text">{product.width}/{product.profile} R{product.diameter}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[0.7rem] uppercase tracking-wider">Ось:</span>
                        <span className="font-semibold text-text">
                            {product.axis === 'steer' ? 'Рулевая' : product.axis === 'drive' ? 'Ведущая' : 'Прицеп'}
                        </span>
                    </div>
                </div>

                <p className="text-sm text-text-muted mb-4 flex-1 line-clamp-2">{product.description}</p>

                <div className="flex gap-2 mt-auto">
                    {product.inStock ? (
                        cartItem ? (
                            <div className="flex items-center justify-between w-full bg-background rounded-md border border-border p-1" onClick={(e) => e.stopPropagation()}>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-sm text-text hover:text-accent disabled:opacity-50"
                                    onClick={handleDecrease}
                                >
                                    -
                                </button>
                                <span className="font-bold text-lg">{cartItem.quantity}</span>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-sm text-text hover:text-accent"
                                    onClick={handleIncrease}
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <button className="btn btn-primary w-full flex items-center justify-center gap-2" onClick={handleAddToCart}>
                                <ShoppingCart size={18} />
                                В корзину
                            </button>
                        )
                    ) : (
                        <button className="btn btn-secondary w-full flex items-center justify-center gap-2 opacity-70 cursor-not-allowed bg-gray-200 text-gray-500 border-gray-300" disabled>
                            Нет в наличии
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
