import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Include editing and deleting options */}
    </div>
  );
};

export default RecipeDetails;