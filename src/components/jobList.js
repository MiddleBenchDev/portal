import React from 'react';
import '../styles/jobList.css';
import JobCard from './jobCard';

function JobList({ jobs, onJobSelect, selectedOption, setSelectedOption }) {
    return (
        <div className="job-list">
            <div className="job-list-header">
                <h2>{jobs.length} Jobs Found</h2>
                <div className="sort-options">
                    <span>Sort by:</span>
                    <select value={selectedOption} onChange={(e) => setSelectedOption(e?.target?.value)} defaultValue={selectedOption}>
                        <option>Relevance</option>
                        <option>Date</option>
                        <option>Salary</option>
                    </select>
                </div>
            </div>

            {jobs.length === 0 ? (
                <div className="no-jobs">
                    <p>No jobs match your search criteria. Try adjusting your filters.</p>
                </div>
            ) : (
                <div className="job-cards">
                    {jobs.map(job => (
                        <JobCard key={job.id} job={job} onSelect={onJobSelect} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default JobList;