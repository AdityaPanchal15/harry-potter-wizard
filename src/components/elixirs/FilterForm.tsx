import React, { useState } from 'react';
import { DIFFICULTY_OPTIONS } from '../../constants';

interface FilterFormProps {
  onApply: (filters: Record<string, string>) => void;
  onReset: () => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onApply, onReset }) => {
  const [filters, setFilters] = useState({
    name: '',
    difficulty: '',
    ingredient: '',
    inventorFullName: '',
    manufacturer: '',
  });

  // Handle input change for filters
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Handle apply filters button click
  const handleApply = () => {
    onApply(filters);
  };

  // Handle reset filters button click
  const handleReset = () => {
    setFilters({
      name: '',
      difficulty: '',
      ingredient: '',
      inventorFullName: '',
      manufacturer: '',
    });
    onReset();
  };

  return (
    <form className='filters-form'>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={filters.name}
        onChange={handleFilterChange}
      />
      <select
        name="difficulty"
        value={filters.difficulty}
        onChange={handleFilterChange}
      >
        <option value="">Select Difficulty</option>
        {DIFFICULTY_OPTIONS.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="ingredient"
        placeholder="Ingredient"
        value={filters.ingredient}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="inventorFullName"
        placeholder="Inventor Full Name"
        value={filters.inventorFullName}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="manufacturer"
        placeholder="Manufacturer"
        value={filters.manufacturer}
        onChange={handleFilterChange}
      />
      <button type="button" onClick={handleApply}>Apply Filters</button>
      <button type="button" onClick={handleReset}>Reset Filters</button>
    </form>
  );
};

export default FilterForm;
