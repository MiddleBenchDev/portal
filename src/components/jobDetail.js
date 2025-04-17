import React from 'react';
import '../styles/jobDetail.css';

function JobDetail({ job, onBack }) {
    return (
        <div className="job-detail">
            <button className="back-button" onClick={onBack}>← Back to Jobs</button>

            <div className="job-header">
                <h2 className="job-title">{job.title}</h2>
                <h3 className="company-name">{job.company}</h3>
                <div className="job-location">{job.location}</div>
                <div className="job-salary">{job.salary}</div>
                <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-posted">{job.posted}</span>
                </div>
            </div>

            <div className="action-buttons">
                <button className="apply-button">Apply Now</button>
                <button className="save-button">Save Job</button>
            </div>

            <div className="job-description">
                <h3>Job Description</h3>
                <p>{job.description}</p>
            </div>

            <div className="job-requirements">
                <h3>Requirements</h3>
                <ul>
                    {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>

            <div className="company-info">
                <h3>About {job.company}</h3>
                <p>
                    {job.company} is a leading company in its field, providing innovative solutions to clients worldwide.
                </p>
            </div>

            <div className="similar-jobs">
                <h3>Similar Jobs</h3>
                <p>Feature coming soon</p>
            </div>
        </div>
    );
}

export default JobDetail;