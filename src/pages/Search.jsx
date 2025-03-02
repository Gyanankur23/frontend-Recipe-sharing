import React, { useState } from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleInputFocus = () => {
        setShowDropdown(true);
    };

    const handleInputBlur = () => {
        setShowDropdown(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={{
                    width: '60%',
                    padding: '15px',
                    fontSize: '1.5em',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                }}
            />
            {showDropdown && (
                <div style={{
                    width: '60%',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    marginTop: '10px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    padding: '10px',
                    textAlign: 'center',
                    animation: 'fade-in 0.3s ease-out'
                }}>
                    <p style={{ fontSize: '1.5em' }}>Suggested searches:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ padding: '10px', cursor: 'pointer' }}>Search Term 1</li>
                        <li style={{ padding: '10px', cursor: 'pointer' }}>Search Term 2</li>
                        <li style={{ padding: '10px', cursor: 'pointer' }}>Search Term 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
