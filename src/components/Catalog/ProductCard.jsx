import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        // Optional: Show toast notification
    };

    return (
        <div className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
            <div className="product-image">
                <img src={product.image} alt={`${product.brand} ${product.model}`} />
                <div className="product-badge">{product.season === 'winter' ? '❄️ Зима' : product.season === 'summer' ? '☀️ Лето' : '🌤 Всесезон'}</div>
            </div>
            <div className="product-info">
                <div className="product-header">
                    <h3 className="product-title">{product.brand} {product.model}</h3>
                    <span className="product-price">{product.price.toLocaleString('ru-RU')} ₽</span>
                </div>

                <div className="product-specs">
                    <div className="spec-item">
                        <span className="spec-label">Размер:</span>
                        <span className="spec-value">{product.width}/{product.profile} R{product.diameter}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Ось:</span>
                        <span className="spec-value">
                            {product.axis === 'steer' ? 'Рулевая' : product.axis === 'drive' ? 'Ведущая' : 'Прицеп'}
                        </span>
                    </div>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-actions">
                    {product.inStock ? (
                        <button className="btn btn-primary" onClick={handleAddToCart}>
                            <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                            В корзину
                        </button>
                    ) : (
                        <button className="btn btn-secondary" disabled style={{ opacity: 0.7, cursor: 'not-allowed', backgroundColor: '#e5e7eb', color: '#6b7280', borderColor: '#d1d5db' }}>
                            Нет в наличии
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
