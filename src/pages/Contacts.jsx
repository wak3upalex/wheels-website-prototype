import React from 'react';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';

const Contacts = () => {
    return (
        <div className="container mx-auto px-4 py-8 pb-16">
            <h1 className="text-3xl font-bold text-primary mb-16 text-center">Контакты</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-8">
                    <div className="flex gap-6 items-start">
                        <Phone className="text-accent p-2.5 bg-accent/10 rounded-full box-content" size={24} />
                        <div>
                            <h3 className="text-lg font-semibold mb-1 text-primary">Телефон</h3>
                            <p className="text-lg text-text"><a href="tel:+78127678557" className="text-text hover:text-accent transition-colors">+7 (812) 767-85-57</a></p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <Mail className="text-accent p-2.5 bg-accent/10 rounded-full box-content" size={24} />
                        <div>
                            <h3 className="text-lg font-semibold mb-1 text-primary">Email</h3>
                            <p className="text-lg text-text"><a href="mailto:info@silamashin.pro" className="text-text hover:text-accent transition-colors">info@silamashin.pro</a></p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <Clock className="text-accent p-2.5 bg-accent/10 rounded-full box-content" size={24} />
                        <div>
                            <h3 className="text-lg font-semibold mb-1 text-primary">Режим работы</h3>
                            <p className="text-lg text-text">Пн-Пт: 9:00 - 18:00</p>
                            <p className="text-lg text-text">Сб-Вс: Выходной</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <MapPin className="text-accent p-2.5 bg-accent/10 rounded-full box-content" size={24} />
                        <div>
                            <h3 className="text-lg font-semibold mb-1 text-primary">Главный офис и склад</h3>
                            <p className="text-lg text-text">г. Санкт-Петербург, пос. Шушары, ул. Пушкинская, д. 25, корп. 4</p>
                            <div className="flex gap-4 mt-4">
                                <a href="https://yandex.ru/maps/org/petromaks/1435574180" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm flex items-center gap-2">
                                    <Navigation size={14} /> Яндекс.Карты
                                </a>
                                <a href="https://2gis.ru/spb/firm/5348553838732613" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm flex items-center gap-2">
                                    <Navigation size={14} /> 2ГИС
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-primary mb-6">Реквизиты</h2>
                    <div className="bg-white p-8 rounded-lg border border-border">
                        <p className="mb-4"><strong>ООО «СИЛА МАШИН»</strong></p>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">ИНН:</span> 7814843394</div>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">КПП:</span> 781401001</div>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">ОГРН:</span> 1247800092836</div>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">Юр. адрес:</span> <span className="text-right max-w-[60%]">197373, г. Санкт-Петербург, пр. Авиаконструкторов, д. 42 к. 3 литера А, помещ. 8-Н</span></div>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">Банк:</span> <span className="text-right max-w-[60%]">СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</span></div>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">БИК:</span> 044030653</div>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">Р/С:</span> 40702810755000139299</div>
                        <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-text-muted font-medium">К/С:</span> 30101810500000000653</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
