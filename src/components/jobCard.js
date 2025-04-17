import React from 'react';
import '../styles/jobCard.css';

function JobCard({ job, onSelect }) {
    return (
        <div className="job-card" onClick={() => onSelect(job.id)}>
            <h3 className="job-title">{job.title}</h3>
            <h4 className="company-name">{job.company}</h4>
            <div className="job-location">{job.location}</div>
            <div className="job-salary">{job.salary}</div>
            <div className="job-meta">
                <span className="job-type">{job.type}</span>
                <span className="job-posted">{job.posted}</span>
            </div>
            <div className="job-snippet">
                {job.description.substring(0, 150)}...
            </div>
        </div>
    );
}

export default JobCard;