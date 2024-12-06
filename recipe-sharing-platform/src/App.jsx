import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  
  return (
    <>
      <p className='text-blue-500'>
      Setting up a react application for a recipe sharing platform with Tailwind CSS
      </p>
      <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Route for the Home Page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />

          {/* Placeholder for other routes like Recipe Details */}
          <Route
            path="/recipe/:id"
            element={<div className="text-center text-gray-700 mt-20">Recipe Details Coming Soon!</div>}
          />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
