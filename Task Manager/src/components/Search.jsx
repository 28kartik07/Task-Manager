import React, { useState } from 'react';
import '../css/search.css';

const Search = ({ tasks, onApply, onClose }) => {
    const [filters, setFilters] = useState({
        title: '',
        priority: '',
        completed: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const applyFilters = () => {
        const isFilterEmpty = !filters.title && !filters.priority && filters.completed === '';
    
        const filtered = isFilterEmpty
            ? tasks 
            : tasks.filter((task) => {
                  const matchesTitle = filters.title
                      ? task.title.toLowerCase().includes(filters.title.toLowerCase())
                      : true;
                  const matchesPriority = filters.priority
                      ? task.priority === filters.priority
                      : true;
                  const matchesCompleted =
                      filters.completed === ''
                          ? true
                          : filters.completed === 'true'
                          ? task.completed
                          : !task.completed;
    
                  return matchesTitle && matchesPriority && matchesCompleted;
              });
    
        onApply(filtered);
        onClose();
    };
    

    return (
        <div className="search-popup">
            <div className="search-popup-content">
                <h3>Search Tasks</h3>
                <form className="search-form">
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={filters.title}
                            onChange={handleInputChange}
                            placeholder="Search by title"
                        />
                    </label>
                    <label>
                        Priority:
                        <select
                            name="priority"
                            value={filters.priority}
                            onChange={handleInputChange}
                        >
                            <option value="">All</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                    <label>
                        Completed:
                        <select
                            name="completed"
                            value={filters.completed}
                            onChange={handleInputChange}
                        >
                            <option value="">All</option>
                            <option value="true">Completed</option>
                            <option value="false">Incomplete</option>
                        </select>
                    </label>
                </form>
                <div className="search-actions">
                    <button onClick={applyFilters}>Apply</button>
                    <button className="cancel-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
