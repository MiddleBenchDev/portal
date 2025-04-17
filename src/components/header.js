import React, { useState } from 'react';
import '../styles/header.css';

function Header({ onSearch }) {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>JobFinder</h1>
                </div>
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="search-field">
                        <label htmlFor="job-search">What</label>
                        <input
                            id="job-search"
                            type="text"
                            placeholder="Job title, keywords, or company"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <div className="search-field">
                        <label htmlFor="location-search">Where</label>
                        <input
                            id="location-search"
                            type="text"
                            placeholder="City, state, or zip code"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="search-button">
                        Find Jobs
                    </button>
                </form>
                <nav className="nav-links">
                    <a href="#post-resume">Post Resume</a>
                    <a href="#sign-in">Sign In</a>
                    <a href="#employers">Employers</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;