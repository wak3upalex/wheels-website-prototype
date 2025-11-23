import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Check, Truck, Shield } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container product-not-found">
                <h2>Товар не найден</h2>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Вернуться в каталог
                </button>
            </div>
        );
    }

    return (
        <div className="container product-details-page">
            <button className="back-link" onClick={() => navigate(-1)}>
                <ArrowLeft size={16} />
                Назад
            </button>

            <div className="product-details-layout">
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={product.image} alt={`${product.brand} ${product.model}`} />
                    </div>
                </div>

                <div className="product-info-block">
                    <h1 className="product-title-large">{product.brand} {product.model}</h1>
                    <div className="product-meta">
                        <span className="product-sku">Артикул: {product.id.toString().padStart(6, '0')}</span>
                        <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                            {product.inStock ? 'В наличии' : 'Нет в наличии'}
                        </span>
                    </div>

                    <div className="product-price-block">
                        <span className="current-price">{product.price.toLocaleString('ru-RU')} ₽</span>
                    </div>

                    <div className="product-actions-large">
                        {product.inStock ? (
                            <button className="btn btn-primary btn-xl" onClick={() => addToCart(product)}>
                                <ShoppingCart size={24} />
                                Добавить в корзину
                            </button>
                        ) : (
                            <button className="btn btn-secondary btn-xl" disabled style={{ opacity: 0.7, cursor: 'not-allowed', backgroundColor: '#e5e7eb', color: '#6b7280', borderColor: '#d1d5db' }}>
                                Нет в наличии
                            </button>
                        )}
                    </div>

                    <div className="product-specs-large">
                        <h3>Характеристики</h3>
                        <div className="specs-grid">
                            <div className="spec-row">
                                <span className="spec-name">Бренд</span>
                                <span className="spec-val">{product.brand}</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-name">Модель</span>
                                <span className="spec-val">{product.model}</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-name">Размер</span>
                                <span className="spec-val">{product.size}</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-name">Посадочный диаметр</span>
                                <span className="spec-val">R{product.diameter}</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-name">Ось</span>
                                <span className="spec-val">
                                    {product.axis === 'steer' ? 'Рулевая' :
                                        product.axis === 'drive' ? 'Ведущая' :
                                            product.axis === 'trailer' ? 'Прицепная' : 'Универсальная'}
                                </span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-name">Сезонность</span>
                                <span className="spec-val">
                                    {product.season === 'winter' ? 'Зимние' :
                                        product.season === 'summer' ? 'Летние' : 'Всесезонные'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="product-description-large">
                        <h3>Описание</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="product-benefits">
                        <div className="benefit-item">
                            <Truck size={24} />
                            <div>
                                <h4>Быстрая доставка</h4>
                                <p>Отправляем в день заказа</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <Shield size={24} />
                            <div>
                                <h4>Гарантия качества</h4>
                                <p>Сертифицированная продукция</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
