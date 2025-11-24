import React from 'react';

const Filters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFilters({
            size: '',
            diameter: '',
            axis: '',
            brand: '',
            season: ''
        });
    };

    return (
        <aside className="bg-white p-6 rounded-lg border border-border h-fit mb-6 md:mb-0">
            <div className="mb-6">
                <h3 className="text-base font-semibold mb-2 text-primary">Размер</h3>
                <select name="size" value={filters.size} onChange={handleChange} className="w-full p-2 border border-border rounded-md bg-background text-sm text-text outline-none focus:border-accent">
                    <option value="">Все размеры</option>
                    <option value="315/70R22.5">315/70R22.5</option>
                    <option value="315/80R22.5">315/80R22.5</option>
                    <option value="295/80R22.5">295/80R22.5</option>
                    <option value="385/65R22.5">385/65R22.5</option>
                </select>
            </div>

            <div className="mb-6">
                <h3 className="text-base font-semibold mb-2 text-primary">Посадочный диаметр</h3>
                <select name="diameter" value={filters.diameter} onChange={handleChange} className="w-full p-2 border border-border rounded-md bg-background text-sm text-text outline-none focus:border-accent">
                    <option value="">Все диаметры</option>
                    <option value="22.5">R22.5</option>
                </select>
            </div>

            <div className="mb-6">
                <h3 className="text-base font-semibold mb-2 text-primary">Ось</h3>
                <select name="axis" value={filters.axis} onChange={handleChange} className="w-full p-2 border border-border rounded-md bg-background text-sm text-text outline-none focus:border-accent">
                    <option value="">Все оси</option>
                    <option value="steer">Рулевая</option>
                    <option value="drive">Ведущая</option>
                    <option value="trailer">Прицепная</option>
                </select>
            </div>

            <div className="mb-6">
                <h3 className="text-base font-semibold mb-2 text-primary">Бренд</h3>
                <select name="brand" value={filters.brand} onChange={handleChange} className="w-full p-2 border border-border rounded-md bg-background text-sm text-text outline-none focus:border-accent">
                    <option value="">Все бренды</option>
                    <option value="Michelin">Michelin</option>
                    <option value="Bridgestone">Bridgestone</option>
                    <option value="Kama">Kama</option>
                    <option value="Cordiant">Cordiant</option>
                    <option value="Hankook">Hankook</option>
                    <option value="Goodyear">Goodyear</option>
                    <option value="Continental">Continental</option>
                </select>
            </div>

            <div className="mb-6">
                <h3 className="text-base font-semibold mb-2 text-primary">Сезонность</h3>
                <select name="season" value={filters.season} onChange={handleChange} className="w-full p-2 border border-border rounded-md bg-background text-sm text-text outline-none focus:border-accent">
                    <option value="">Все сезоны</option>
                    <option value="summer">Летние</option>
                    <option value="winter">Зимние</option>
                    <option value="all">Всесезонные</option>
                </select>
            </div>

            <button
                className="btn btn-outline w-full mt-4"
                onClick={handleReset}
            >
                Сбросить фильтры
            </button>
        </aside>
    );
};

export default Filters;
