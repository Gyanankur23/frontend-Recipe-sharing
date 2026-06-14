import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const suggestions = [
        'Chicken Biryani',
        'Paneer Butter Masala',
        'Masoor Dal',
        'Aloo Gobi',
        'Gulab Jamun'
    ];

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleInputFocus = () => {
        setShowDropdown(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => setShowDropdown(false), 200);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowDropdown(false);
        navigate('/recipe-details');
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate('/recipe-details');
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            {showDropdown && (
                <div className="search-dropdown">
                    <p>Suggested searches:</p>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li 
                                key={index} 
                                onClick={() => handleSuggestionClick(suggestion)}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
