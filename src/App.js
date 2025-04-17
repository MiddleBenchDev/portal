import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import JobList from './components/jobList';
import Sidebar from './components/sideBar';
import JobDetail from './components/jobDetail';

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      salary: "$90,000 - $120,000",
      type: "Full-time",
      posted: "2 days ago",
      description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces using React.js, implementing responsive design, and collaborating with backend developers.",
      requirements: [
        "3+ years of experience with React.js",
        "Strong knowledge of JavaScript, HTML, and CSS",
        "Experience with RESTful APIs",
        "Bachelor's degree in Computer Science or related field"
      ]
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Creative Minds",
      location: "Remote",
      salary: "$85,000 - $110,000",
      type: "Full-time",
      posted: "1 day ago",
      description: "Creative Minds is seeking a UX Designer to create exceptional user experiences for our clients. You will work closely with product managers and developers to design intuitive interfaces.",
      requirements: [
        "Portfolio showcasing UX design work",
        "Experience with Figma or Adobe XD",
        "Understanding of user research methods",
        "Excellent communication skills"
      ]
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Data Systems Corp",
      location: "Austin, TX",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      posted: "3 days ago",
      description: "Join our backend team to develop scalable APIs and services. You'll work with cutting-edge technologies and contribute to our cloud infrastructure.",
      requirements: [
        "Experience with Node.js and Express",
        "Knowledge of database systems",
        "Understanding of microservices architecture",
        "Problem-solving skills"
      ]
    }
  ]);

  const [filters, setFilters] = useState({
    jobType: [],
    location: '',
    salary: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleJobSelect = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    setSelectedJob(job);
  };

  const filteredJobs = jobs.filter(job => {
    // Search query filter
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Job type filter
    if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
      return false;
    }

    // Location filter
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Simple salary filter
    if (filters.salary) {
      const jobSalaryNum = parseInt(job.salary.replace(/[^0-9]/g, ''));
      const filterSalaryNum = parseInt(filters.salary.replace(/[^0-9]/g, ''));
      if (jobSalaryNum < filterSalaryNum) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <div className="main-content">
        <Sidebar filters={filters} onFilterChange={handleFilterChange} />
        <div className="content">
          {selectedJob ? (
            <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />
          ) : (
            <JobList jobs={filteredJobs} onJobSelect={handleJobSelect} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;