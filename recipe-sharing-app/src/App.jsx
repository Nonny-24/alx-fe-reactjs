import { useState } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <>
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
    <Router>
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        {/* Other routes */}
      </Routes>
    </Router>
    </>
  )
}

export default App;
