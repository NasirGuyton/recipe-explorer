import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      dispatch(fetchRecipes(query));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}
