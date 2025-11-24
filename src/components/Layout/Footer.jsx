import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Truck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 font-extrabold text-xl mb-4">
                            <Truck size={24} />
                            <span>СИЛА МАШИН</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Обеспечение надежности и безопасности транспортных средств наших клиентов.
                            Качественные грузовые шины и диски.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-accent">Навигация</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Link to="/" className="text-slate-300 hover:text-accent transition-colors">Каталог</Link></li>
                            <li><Link to="/about" className="text-slate-300 hover:text-accent transition-colors">О компании</Link></li>
                            <li><Link to="/delivery" className="text-slate-300 hover:text-accent transition-colors">Доставка и оплата</Link></li>
                            <li><Link to="/contacts" className="text-slate-300 hover:text-accent transition-colors">Контакты</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-accent">Контакты</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2 text-slate-300">
                                <Phone size={16} />
                                <span>+7 (812) 767-85-57</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-300">
                                <Mail size={16} />
                                <span>info@silamashin.pro</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-300">
                                <MapPin size={16} />
                                <span>г. Санкт-Петербург, пос. Шушары, ул. Пушкинская, д. 25, корп. 4</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-accent">Реквизиты</h3>
                        <p className="text-slate-300 mb-1">ООО "СИЛА МАШИН"</p>
                        <p className="text-slate-300 mb-1">ИНН: 7814843394</p>
                        <p className="text-slate-300 mb-1">ОГРН: 1247800092836</p>
                    </div>
                </div>

                <div className="border-t border-slate-700 py-6 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} СИЛА МАШИН. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
