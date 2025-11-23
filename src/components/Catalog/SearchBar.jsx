import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="catalog-search">
            <Search className="search-icon" size={20} />
            <input
                type="text"
                placeholder="Поиск по названию, модели или размеру..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
