import React from 'react';
import './Filters.css';

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
        <aside className="filters">
            <div className="filter-group">
                <h3>Размер</h3>
                <select name="size" value={filters.size} onChange={handleChange}>
                    <option value="">Все размеры</option>
                    <option value="315/70R22.5">315/70R22.5</option>
                    <option value="315/80R22.5">315/80R22.5</option>
                    <option value="295/80R22.5">295/80R22.5</option>
                    <option value="385/65R22.5">385/65R22.5</option>
                </select>
            </div>

            <div className="filter-group">
                <h3>Посадочный диаметр</h3>
                <select name="diameter" value={filters.diameter} onChange={handleChange}>
                    <option value="">Все диаметры</option>
                    <option value="22.5">R22.5</option>
                </select>
            </div>

            <div className="filter-group">
                <h3>Ось</h3>
                <select name="axis" value={filters.axis} onChange={handleChange}>
                    <option value="">Все оси</option>
                    <option value="steer">Рулевая</option>
                    <option value="drive">Ведущая</option>
                    <option value="trailer">Прицепная</option>
                </select>
            </div>

            <div className="filter-group">
                <h3>Бренд</h3>
                <select name="brand" value={filters.brand} onChange={handleChange}>
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

            <div className="filter-group">
                <h3>Сезонность</h3>
                <select name="season" value={filters.season} onChange={handleChange}>
                    <option value="">Все сезоны</option>
                    <option value="summer">Летние</option>
                    <option value="winter">Зимние</option>
                    <option value="all">Всесезонные</option>
                </select>
            </div>

            <button
                className="btn btn-outline"
                onClick={handleReset}
                style={{ width: '100%', marginTop: '1rem' }}
            >
                Сбросить фильтры
            </button>
        </aside>
    );
};

export default Filters;
