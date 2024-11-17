import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

/*const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };*/

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  
    return (
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} style={{ marginBottom: '20px' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} style={{ color: '#007bff' }}>
              View Details
            </Link>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    );
  };
  
export default RecipeList;