import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/Catalog/ProductCard';
import Filters from '../components/Catalog/Filters';
import SearchBar from '../components/Catalog/SearchBar';
import { products } from '../data/products';

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
        <div className="container mx-auto px-4 py-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                <div className="mb-6 md:mb-0">
                    <Filters filters={filters} setFilters={setFilters} />
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <h1 className="text-2xl font-bold text-primary">Каталог грузовых шин</h1>
                        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                            <select
                                className="p-2 border border-border rounded-md text-sm outline-none cursor-pointer"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="">По умолчанию</option>
                                <option value="price-asc">Сначала дешевле</option>
                                <option value="price-desc">Сначала дороже</option>
                                <option value="name-asc">По названию (А-Я)</option>
                            </select>
                            <span className="text-text-muted font-medium">Найдено: {filteredProducts.length}</span>
                        </div>
                    </div>

                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map(product => (
                                <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-12 bg-white rounded-lg border border-dashed border-border">
                            <p className="mb-4 text-text-muted text-lg">По вашему запросу ничего не найдено.</p>
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
