import React from 'react';
import { Truck, Award, Users, Clock } from 'lucide-react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8 pb-16">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-primary">О компании «СИЛА МАШИН»</h1>
                <p className="text-xl text-text-muted">Молодая, амбициозная и быстро развивающаяся организация, специализирующаяся на продаже грузовых шин и дисков для коммерческого транспорта.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white p-6 rounded-lg border border-border text-center transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                    <div className="flex justify-center">
                        <Truck size={48} className="text-accent mb-4" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Широкий ассортимент</h3>
                    <p className="text-text-muted">Мы занимаемся оптовой и розничной торговлей грузовых шин, шин для спецтехники и дисков.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border text-center transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                    <div className="flex justify-center">
                        <Award size={48} className="text-accent mb-4" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Официальный дилер</h3>
                    <p className="text-text-muted">Являемся эксклюзивным дилером шин Ogreen и Jinyu в Санкт-Петербурге и Ленинградской области.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border text-center transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                    <div className="flex justify-center">
                        <Users size={48} className="text-accent mb-4" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Профессиональная команда</h3>
                    <p className="text-text-muted">Наша команда состоит из специалистов с глубокими знаниями в области грузоперевозок и эксплуатации шин.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border text-center transition-transform duration-200 hover:-translate-y-1 hover:border-accent">
                    <div className="flex justify-center">
                        <Clock size={48} className="text-accent mb-4" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Комплексный подход</h3>
                    <p className="text-text-muted">Оказываем весь спектр услуг шиномонтажа и предлагаем высококлассные решения для минимизации затрат бизнеса.</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto leading-relaxed">
                <h2 className="text-2xl font-bold mb-4 text-primary mt-12">Наша миссия</h2>
                <p className="mb-4 text-text">
                    Миссия компании «СИЛА МАШИН» — это обеспечение надежности и безопасности транспортных средств наших клиентов, предоставляя качественные комплектующие, способные выдерживать сложные условия эксплуатации.
                </p>
                <p className="mb-4 text-text">
                    Мы стремимся быть не просто поставщиком, но и надежным партнером для наших клиентов. Мы работаем с ведущими производителями, чтобы обеспечить клиентов качественной и надежной продукцией.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary mt-12">Реквизиты</h2>
                <div className="bg-background p-6 rounded-md border border-border text-sm">
                    <p className="mb-1 text-text"><strong>ООО «СИЛА МАШИН»</strong></p>
                    <p className="mb-1 text-text">ИНН: 7814843394 / КПП: 781401001</p>
                    <p className="mb-1 text-text">ОГРН: 1247800092836</p>
                    <p className="mb-1 text-text">Юридический адрес: 197373, г. Санкт-Петербург, пр. Авиаконструкторов, д. 42 к. 3 литера А, помещ. 8-Н</p>
                    <p className="mb-1 text-text">Фактический адрес: г. Санкт-Петербург, пос. Шушары, ул. Пушкинская, д. 25, корп. 4</p>
                    <p className="mb-1 text-text">Банк: СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</p>
                    <p className="mb-1 text-text">БИК: 044030653</p>
                    <p className="mb-1 text-text">Р/С: 40702810755000139299</p>
                    <p className="mb-1 text-text">К/С: 30101810500000000653</p>
                </div>
            </div>
        </div>
    );
};

export default About;
