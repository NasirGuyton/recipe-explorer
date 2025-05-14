import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

export default function RecipeList() {
  const { items, status, error } = useSelector((state) => state.recipes);

  if (status === 'loading') return <p className="text-center p-4">Loading...</p>;
  if (status === 'failed') return <p className="text-center p-4 text-red-500">Error: {error}</p>;
  if (items.length === 0) return <p className="text-center p-4">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {items.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
