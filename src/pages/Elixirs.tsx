import React, { useState, useEffect } from 'react';
import FilterForm from '../components/elixirs/FilterForm';
import ElixirList from '../components/elixirs/ElixirList';
import Elixir from '../types/elixir';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const Elixirs: React.FC = () => {
  const [elixirs, setElixirs] = useState<Elixir[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data on initial load
  useEffect(() => {
    fetchElixirs({});
  }, []);

  // Fetch list of elixirs
  const fetchElixirs = async (filters: Record<string, string>) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      Object.keys(filters).forEach((key) => {
        const value = filters[key];
        if (value) params.append(key, value); // Add only non-empty values
      });

      const response = await fetch(`${API_BASE_URL}?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch elixirs');
      }

      const data: Elixir[] = await response.json();
      setElixirs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Handle filter apply event
  const handleApplyFilters = (filters: Record<string, string>) => {
    fetchElixirs(filters);
  };

  // Handle reset event
  const handleResetFilters = () => {
    fetchElixirs({});
  };

  return (
    <div>
      <h1>Elixir List</h1>
      <FilterForm
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
      />

      {loading && <h3>Loading...</h3>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ElixirList elixirs={elixirs} />
    </div>
  );
};

export default Elixirs;
