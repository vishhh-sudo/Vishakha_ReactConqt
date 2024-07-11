
import React from 'react';
import FilterDropdown from './components/filter';

const App = () => {
  const filters = [
    { name: 'Date of registration', type: 'input' },
    { name: 'Vendor score', type: 'select', options: [
        { label: 'High', value: 'high' },
        { label: 'Medium', value: 'medium' },
        { label: 'Low', value: 'low' },
      ]
    },
    { name: 'Rating', type: 'input' },
    { name: 'Status', type: 'select', options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ]
    },
    { name: 'Type of business', type: 'input' },
    { name: 'Location', type: 'input' },
    { name: 'Assign to', type: 'input' }
  ];

  return (
    <div>
      <h1>Filter</h1>
      <FilterDropdown buttonName="Filters" filters={filters} />
    </div>
  );
};

export default App;

