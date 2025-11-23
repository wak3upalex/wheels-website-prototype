import React from 'react';
import { Truck, CreditCard, MapPin, Clock, FileText, Navigation } from 'lucide-react';
import './Delivery.css';

const Delivery = () => {
    return (
        <div className="container delivery-page">
            <h1>Доставка и оплата</h1>

            <section className="delivery-section">
                <h2><CreditCard className="section-icon" /> Оплата</h2>
                <div className="payment-methods">
                    <div className="method-card">
                        <h3>Безналичный расчет</h3>
                        <p>По заранее выставленному счету для юридических лиц.</p>
                    </div>
                    <div className="method-card">
                        <h3>За наличный расчет</h3>
                        <p>Отправляем чек сообщением.</p>
                    </div>
                    <div className="method-card">
                        <h3>QR-кодом</h3>
                        <p>Отправляем код удобным для вас способом.</p>
                    </div>
                    <div className="method-card">
                        <h3>По ссылке</h3>
                        <p>Отправляем ссылку по почте или в WhatsApp/Telegram.</p>
                    </div>
                </div>
            </section>

            <section className="delivery-section">
                <h2><Truck className="section-icon" /> Доставка</h2>
                <div className="delivery-options">
                    <div className="option-card">
                        <h3>В пределах КАД</h3>
                        <p className="price">от 2 500 руб.</p>
                    </div>
                    <div className="option-card highlight">
                        <h3>При покупке от 8 шин</h3>
                        <p className="price">Бесплатно</p>
                        <p className="note">В пределах КАД</p>
                    </div>
                    <div className="option-card">
                        <h3>Отправка ТК</h3>
                        <p className="price">По запросу</p>
                        <p className="note">Транспортной компанией в регионы</p>
                    </div>
                </div>
                <div className="important-note">
                    <FileText size={24} />
                    <p><strong>Важно:</strong> При получении товара любым способом необходимо предъявить доверенность и паспорт.</p>
                </div>
            </section>

            <section className="delivery-section">
                <h2><MapPin className="section-icon" /> Самовывоз</h2>
                <p className="pickup-intro">Шины и диски можно забрать по следующим адресам (при наличии товара):</p>

                <div className="pickup-locations">
                    <div className="location-card">
                        <h3>пос. Шушары, ул. Пушкинская, д. 25, корп. 4</h3>
                        <div className="location-details">
                            <div className="detail-row">
                                <Clock size={16} />
                                <span>8:00-18:00 по будним дням</span>
                            </div>
                            <div className="detail-row">
                                <Navigation size={16} />
                                <div className="map-links">
                                    <a href="https://yandex.ru/maps/org/petromaks/1435574180" target="_blank" rel="noopener noreferrer">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/petromaks/1435574180" target="_blank" rel="noopener noreferrer">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/firm/5348553838732613" target="_blank" rel="noopener noreferrer">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="location-card">
                        <h3>пос. Шушары, Железнодорожная ул., дом 9Б</h3>
                        <div className="location-details">
                            <div className="detail-row">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="detail-row">
                                <Navigation size={16} />
                                <div className="map-links">
                                    <a href="https://yandex.ru/maps/org/pyat_zvyozd/70567176321" target="_blank" rel="noopener noreferrer">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/pyat_zvyozd/70567176321" target="_blank" rel="noopener noreferrer">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/firm/70000001025497556/30.390115%2C59.805091" target="_blank" rel="noopener noreferrer">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="location-card">
                        <h3>Октябрьская наб., д. 35</h3>
                        <div className="location-details">
                            <div className="detail-row">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="detail-row">
                                <Navigation size={16} />
                                <div className="map-links">
                                    <a href="https://yandex.ru/maps/org/pyat_zvyozd/146837846925/?ll=30.504200%2C59.853817&z=16" target="_blank" rel="noopener noreferrer">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/pyat_zvyozd/146837846925" target="_blank" rel="noopener noreferrer">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/directions/points/29.79806%2C60.301395%3B5348647327760666" target="_blank" rel="noopener noreferrer">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="location-card">
                        <h3>пр. Культуры, д. 63</h3>
                        <div className="location-details">
                            <div className="detail-row">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="detail-row">
                                <Navigation size={16} />
                                <div className="map-links">
                                    <a href="https://yandex.ru/maps/org/pyat_zvyozd/211857843926" target="_blank" rel="noopener noreferrer">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/pyat_zvyozd/240846698114" target="_blank" rel="noopener noreferrer">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/geo/70030076272636505" target="_blank" rel="noopener noreferrer">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="location-card">
                        <h3>Скандинавия, пос. Огоньки, ул. Монастырская, д. 20</h3>
                        <div className="location-details">
                            <div className="detail-row">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="detail-row">
                                <Navigation size={16} />
                                <div className="map-links">
                                    <a href="https://yandex.ru/maps/org/petromaks/1456937549" target="_blank" rel="noopener noreferrer">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/petromaks/1456937549" target="_blank" rel="noopener noreferrer">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/geo/70000001033060527" target="_blank" rel="noopener noreferrer">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Delivery;
