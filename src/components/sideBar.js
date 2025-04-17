import React from 'react';
import '../styles/sideBar.css';

function Sidebar({ filters, onFilterChange }) {
    const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"];

    const handleJobTypeChange = (type) => {
        let newJobTypes;
        if (filters.jobType.includes(type)) {
            newJobTypes = filters.jobType.filter(t => t !== type);
        } else {
            newJobTypes = [...filters.jobType, type];
        }

        onFilterChange({
            ...filters,
            jobType: newJobTypes
        });
    };

    const handleLocationChange = (e) => {
        onFilterChange({
            ...filters,
            location: e.target.value
        });
    };

    const handleSalaryChange = (e) => {
        onFilterChange({
            ...filters,
            salary: e.target.value
        });
    };

    const clearFilters = () => {
        onFilterChange({
            jobType: [],
            location: '',
            salary: ''
        });
    };

    return (
        <div className="sidebar">
            <div className="filter-section">
                <h3>Filter by</h3>
                <button className="clear-filters" onClick={clearFilters}>Clear All</button>
            </div>

            <div className="filter-section">
                <h4>Job Type</h4>
                <div className="checkbox-group">
                    {jobTypes.map(type => (
                        <label key={type} className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.jobType.includes(type)}
                                onChange={() => handleJobTypeChange(type)}
                            />
                            {type}
                        </label>
                    ))}
                </div>
            </div>

            <div className="filter-section">
                <h4>Location</h4>
                <input
                    type="text"
                    placeholder="City, state, or zip"
                    value={filters.location}
                    onChange={handleLocationChange}
                    className="filter-input"
                />
            </div>

            <div className="filter-section">
                <h4>Salary</h4>
                <select
                    value={filters.salary}
                    onChange={handleSalaryChange}
                    className="filter-select"
                >
                    <option value="">Any</option>
                    <option value="40000">$40,000+</option>
                    <option value="60000">$60,000+</option>
                    <option value="80000">$80,000+</option>
                    <option value="100000">$100,000+</option>
                    <option value="120000">$120,000+</option>
                </select>
            </div>

            <div className="filter-section">
                <h4>Date Posted</h4>
                <div className="radio-group">
                    <label className="radio-label">
                        <input type="radio" name="date-posted" />
                        Last 24 hours
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="date-posted" />
                        Last 3 days
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="date-posted" />
                        Last 7 days
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="date-posted" />
                        Last 14 days
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;