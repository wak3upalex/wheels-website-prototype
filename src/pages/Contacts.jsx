import React from 'react';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="container contacts-page">
            <h1>Контакты</h1>

            <div className="contacts-grid">
                <div className="contact-info-block">
                    <div className="contact-item">
                        <Phone className="contact-icon" size={24} />
                        <div>
                            <h3>Телефон</h3>
                            <p><a href="tel:+78127678557">+7 (812) 767-85-57</a></p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Mail className="contact-icon" size={24} />
                        <div>
                            <h3>Email</h3>
                            <p><a href="mailto:info@silamashin.pro">info@silamashin.pro</a></p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Clock className="contact-icon" size={24} />
                        <div>
                            <h3>Режим работы</h3>
                            <p>Пн-Пт: 9:00 - 18:00</p>
                            <p>Сб-Вс: Выходной</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <MapPin className="contact-icon" size={24} />
                        <div>
                            <h3>Главный офис и склад</h3>
                            <p>г. Санкт-Петербург, пос. Шушары, ул. Пушкинская, д. 25, корп. 4</p>
                            <div className="map-links-large">
                                <a href="https://yandex.ru/maps/org/petromaks/1435574180" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                    <Navigation size={14} /> Яндекс.Карты
                                </a>
                                <a href="https://2gis.ru/spb/firm/5348553838732613" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                    <Navigation size={14} /> 2ГИС
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="requisites-section">
                    <h2>Реквизиты</h2>
                    <div className="requisites-card">
                        <p><strong>ООО «СИЛА МАШИН»</strong></p>
                        <div className="req-row"><span>ИНН:</span> 7814843394</div>
                        <div className="req-row"><span>КПП:</span> 781401001</div>
                        <div className="req-row"><span>ОГРН:</span> 1247800092836</div>
                        <div className="req-row"><span>Юр. адрес:</span> 197373, г. Санкт-Петербург, пр. Авиаконструкторов, д. 42 к. 3 литера А, помещ. 8-Н</div>
                        <div className="req-row"><span>Банк:</span> СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</div>
                        <div className="req-row"><span>БИК:</span> 044030653</div>
                        <div className="req-row"><span>Р/С:</span> 40702810755000139299</div>
                        <div className="req-row"><span>К/С:</span> 30101810500000000653</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
