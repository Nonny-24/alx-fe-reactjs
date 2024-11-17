import { useState } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import Home from './components/Home'; 
import EditRecipeForm from '.components/EditRecipeForm';
import SearchBar from '.components/SearchBar';

function App() {
  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
      <SearchBar />
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/recipe/:recipeId/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
