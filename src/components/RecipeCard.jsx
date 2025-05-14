import { motion } from 'framer-motion';

export default function RecipeCard({ recipe }) {
  return (
    <motion.div
      className="border rounded p-4 shadow hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
    </motion.div>
  );
}
