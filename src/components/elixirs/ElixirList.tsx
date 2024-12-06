import React from 'react';
import Elixir from '../../types/elixir';

interface ElixirListProps {
  elixirs: Elixir[];
}

const ElixirList: React.FC<ElixirListProps> = ({ elixirs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Effect</th>
          <th>Ingredients</th>
          <th>Characteristics</th>
          <th>Side Effects</th>
          <th>Inventors</th>
          <th>Manufacturer</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {elixirs.length === 0 ? (
          <tr>
            <td colSpan={9}>No elixirs found</td>
          </tr>
        ) : (
          elixirs.map((elixir) => (
            <tr key={elixir.id}>
              <td>{elixir.name}</td>
              <td>{elixir.difficulty}</td>
              <td>{elixir.effect || 'N/A'}</td>
              <td>{elixir.ingredients.map(ingredient => ingredient.name).join(', ') || 'N/A'}</td>
              <td>{elixir.characteristics || 'N/A'}</td>
              <td>{elixir.sideEffects || 'N/A'}</td>
              <td>{elixir.inventors.map(inventor => `${inventor.firstName} ${inventor.lastName}`).join(', ') || 'N/A'}</td>
              <td>{elixir.manufacturer || 'N/A'}</td>
              <td>{elixir.time || 'N/A'}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ElixirList;
