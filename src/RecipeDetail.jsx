// RecipeDetail.js
import React from 'react';

const RecipeDetail = ({ recipeId,onBackClick }) => {
  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Details for Recipe ID: {recipeId} will be displayed here.</p>
      {/* Add any other temporary content or UI elements here */}
      <button onClick={onBackClick}>Home</button>
    </div>
  );
};

export default RecipeDetail;
