import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
                type="text"
                placeholder="Поиск по названию, модели или размеру..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pr-4 pl-12 border border-border rounded-lg text-base outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/10"
            />
        </div>
    );
};

export default SearchBar;
