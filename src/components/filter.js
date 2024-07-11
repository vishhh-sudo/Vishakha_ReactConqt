


import React, { useState } from 'react';
import './filter.css';

const FilterDropdown = ({ buttonName, filters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        <span>{buttonName}</span>
        <span className="filter-icon">▼</span>
      </button>
      {isOpen && (
        <div className="filter-menu">
          <div className="filter-header">
            <span>Refine by</span>
            <button className="clear-button">Clear</button>
          </div>
          <ul className="filter-list">
            {filters.map((filter, index) => (
              <li key={index} className="filter-item">
                <label>{filter.name}</label>
                {filter.type === 'input' && <input type="text" />}
                {filter.type === 'select' && (
                  <select>
                    {filter.options.map((option, idx) => (
                      <option key={idx} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
