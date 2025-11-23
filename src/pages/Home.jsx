import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/Catalog/ProductCard';
import Filters from '../components/Catalog/Filters';
import SearchBar from '../components/Catalog/SearchBar';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // 'price-asc', 'price-desc', 'name-asc'
    const [filters, setFilters] = useState({
        size: '',
        diameter: '',
        axis: '',
        brand: '',
        season: ''
    });

    useEffect(() => {
        const query = searchParams.get('search');
        if (query) {
            setSearchTerm(query);
        }
    }, [searchParams]);

    const filteredProducts = useMemo(() => {
        let result = products.filter(product => {
            // Search filter
            const matchesSearch =
                product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.size.toLowerCase().includes(searchTerm.toLowerCase());

            if (!matchesSearch) return false;

            // Category filters
            if (filters.size && product.size !== filters.size) return false;
            if (filters.diameter && product.diameter.toString() !== filters.diameter) return false;
            if (filters.axis && product.axis !== filters.axis) return false;
            if (filters.brand && product.brand !== filters.brand) return false;

            if (filters.season && product.season !== filters.season && filters.season !== 'all') {
                if (filters.season === 'all' && product.season !== 'all') return false;
                if (filters.season !== 'all' && product.season !== filters.season) return false;
            }

            return true;
        });

        // Sorting
        if (sortOrder === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortOrder === 'name-asc') {
            result.sort((a, b) => a.brand.localeCompare(b.brand));
        }

        return result;
    }, [searchTerm, filters, sortOrder]);

    return (
        <div className="container home-page">
            <div className="catalog-layout">
                <div className="catalog-sidebar">
                    <Filters filters={filters} setFilters={setFilters} />
                </div>

                <div className="catalog-content">
                    <div className="catalog-header">
                        <h1>Каталог грузовых шин</h1>
                        <div className="catalog-controls">
                            <select
                                className="sort-select"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="">По умолчанию</option>
                                <option value="price-asc">Сначала дешевле</option>
                                <option value="price-desc">Сначала дороже</option>
                                <option value="name-asc">По названию (А-Я)</option>
                            </select>
                            <span className="product-count">Найдено: {filteredProducts.length}</span>
                        </div>
                    </div>

                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                    {filteredProducts.length > 0 ? (
                        <div className="product-grid">
                            {filteredProducts.map(product => (
                                <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: 'pointer' }}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>По вашему запросу ничего не найдено.</p>
                            <button
                                className="btn btn-outline"
                                onClick={() => {
                                    setSearchTerm('');
                                    setFilters({ size: '', diameter: '', axis: '', brand: '', season: '' });
                                }}
                            >
                                Сбросить все фильтры
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
