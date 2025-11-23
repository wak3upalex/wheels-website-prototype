import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Truck } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section company-info">
                        <div className="footer-logo">
                            <Truck size={24} />
                            <span>СИЛА МАШИН</span>
                        </div>
                        <p>
                            Обеспечение надежности и безопасности транспортных средств наших клиентов.
                            Качественные грузовые шины и диски.
                        </p>
                    </div>

                    <div className="footer-section links">
                        <h3>Навигация</h3>
                        <ul>
                            <li><Link to="/">Каталог</Link></li>
                            <li><Link to="/about">О компании</Link></li>
                            <li><Link to="/delivery">Доставка и оплата</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section contacts">
                        <h3>Контакты</h3>
                        <ul>
                            <li>
                                <Phone size={16} />
                                <span>+7 (812) 767-85-57</span>
                            </li>
                            <li>
                                <Mail size={16} />
                                <span>info@silamashin.pro</span>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>г. Санкт-Петербург, пос. Шушары, ул. Пушкинская, д. 25, корп. 4</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section requisites">
                        <h3>Реквизиты</h3>
                        <p>ООО "СИЛА МАШИН"</p>
                        <p>ИНН: 7814843394</p>
                        <p>ОГРН: 1247800092836</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} СИЛА МАШИН. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
