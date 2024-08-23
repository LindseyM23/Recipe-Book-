import React, { useState } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail'; 





const App = () => {
const [selectedRecipeId, setSelectedRecipeId] = useState(null);

const handleRecipeClick = (id) => {
  setSelectedRecipeId(id);
};

const handleBackClick =()=>{
  setSelectedRecipeId(null);
}

  return (
    <>
    <div className="App">
      <h1><img src='./magic.png' alt='logo'  width={80} />Recipe Book</h1>
      {selectedRecipeId ? (
        <RecipeDetail recipeId={selectedRecipeId} onBackClick={handleBackClick} />
      ):(
        <RecipeList onRecipeClick={handleRecipeClick}/>
      )}

      <h3 className='footer'> <img src='./magic.png'></img> &copy; Created by Lindsey Monyepao & Zinhle Nhlapho</h3>
    </div>
    </>
  );
}



export default App;
