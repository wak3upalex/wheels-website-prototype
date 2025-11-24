import React from 'react';
import { Truck, CreditCard, MapPin, Clock, FileText, Navigation } from 'lucide-react';

const Delivery = () => {
    return (
        <div className="container mx-auto px-4 py-8 pb-16">
            <h1 className="text-3xl font-bold text-primary mb-16 text-center">Доставка и оплата</h1>

            <section className="mb-12">
                <h2 className="text-2xl text-text mb-8 flex items-center gap-4 border-b-2 border-border pb-2">
                    <CreditCard className="text-accent" /> Оплата
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-md border border-border transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                        <h3 className="text-lg font-semibold mb-2 text-primary">Безналичный расчет</h3>
                        <p className="text-text-muted text-sm">По заранее выставленному счету для юридических лиц.</p>
                    </div>
                    <div className="bg-white p-6 rounded-md border border-border transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                        <h3 className="text-lg font-semibold mb-2 text-primary">За наличный расчет</h3>
                        <p className="text-text-muted text-sm">Отправляем чек сообщением.</p>
                    </div>
                    <div className="bg-white p-6 rounded-md border border-border transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                        <h3 className="text-lg font-semibold mb-2 text-primary">QR-кодом</h3>
                        <p className="text-text-muted text-sm">Отправляем код удобным для вас способом.</p>
                    </div>
                    <div className="bg-white p-6 rounded-md border border-border transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                        <h3 className="text-lg font-semibold mb-2 text-primary">По ссылке</h3>
                        <p className="text-text-muted text-sm">Отправляем ссылку по почте или в WhatsApp/Telegram.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-text mb-8 flex items-center gap-4 border-b-2 border-border pb-2">
                    <Truck className="text-accent" /> Доставка
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-8 rounded-lg border border-border text-center">
                        <h3 className="text-lg font-semibold mb-4">В пределах КАД</h3>
                        <p className="text-2xl font-bold text-primary mb-1">от 2 500 руб.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg border border-accent bg-accent/5 text-center">
                        <h3 className="text-lg font-semibold mb-4">При покупке от 8 шин</h3>
                        <p className="text-2xl font-bold text-primary mb-1">Бесплатно</p>
                        <p className="text-text-muted text-sm">В пределах КАД</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg border border-border text-center">
                        <h3 className="text-lg font-semibold mb-4">Отправка ТК</h3>
                        <p className="text-2xl font-bold text-primary mb-1">По запросу</p>
                        <p className="text-text-muted text-sm">Транспортной компанией в регионы</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-md">
                    <FileText size={24} />
                    <p><strong>Важно:</strong> При получении товара любым способом необходимо предъявить доверенность и паспорт.</p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-text mb-8 flex items-center gap-4 border-b-2 border-border pb-2">
                    <MapPin className="text-accent" /> Самовывоз
                </h2>
                <p className="mb-6 text-lg">Шины и диски можно забрать по следующим адресам (при наличии товара):</p>

                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-6 rounded-md border border-border">
                        <h3 className="text-lg font-semibold mb-4 text-primary">пос. Шушары, ул. Пушкинская, д. 25, корп. 4</h3>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Clock size={16} />
                                <span>8:00-18:00 по будним дням</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-muted">
                                <Navigation size={16} />
                                <div className="flex gap-2">
                                    <a href="https://yandex.ru/maps/org/petromaks/1435574180" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/petromaks/1435574180" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/firm/5348553838732613" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-border">
                        <h3 className="text-lg font-semibold mb-4 text-primary">пос. Шушары, Железнодорожная ул., дом 9Б</h3>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-muted">
                                <Navigation size={16} />
                                <div className="flex gap-2">
                                    <a href="https://yandex.ru/maps/org/pyat_zvyozd/70567176321" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/pyat_zvyozd/70567176321" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/firm/70000001025497556/30.390115%2C59.805091" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-border">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Октябрьская наб., д. 35</h3>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-muted">
                                <Navigation size={16} />
                                <div className="flex gap-2">
                                    <a href="https://yandex.ru/maps/org/pyat_zvyozd/146837846925/?ll=30.504200%2C59.853817&z=16" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/pyat_zvyozd/146837846925" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/directions/points/29.79806%2C60.301395%3B5348647327760666" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-border">
                        <h3 className="text-lg font-semibold mb-4 text-primary">пр. Культуры, д. 63</h3>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-muted">
                                <Navigation size={16} />
                                <div className="flex gap-2">
                                    <a href="https://yandex.ru/maps/org/pyat_zvyozd/211857843926" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/pyat_zvyozd/240846698114" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/geo/70030076272636505" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">2Гис</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-border">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Скандинавия, пос. Огоньки, ул. Монастырская, д. 20</h3>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Clock size={16} />
                                <span>Круглосуточно</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-muted">
                                <Navigation size={16} />
                                <div className="flex gap-2">
                                    <a href="https://yandex.ru/maps/org/petromaks/1456937549" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Карты</a>
                                    <a href="https://yandex.ru/navi/org/petromaks/1456937549" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">Я.Навигатор</a>
                                    <a href="https://2gis.ru/spb/geo/70000001033060527" target="_blank" rel="noopener noreferrer" className="text-accent underline text-sm hover:no-underline">2Гис</a>
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
