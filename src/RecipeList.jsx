import React from "react";
import './App.css'


const RecipeList = ({onRecipeClick}) => {
    const recipes = [
       {id: 1 ,
        name:  'Spaghetti Carbonara',
        image: './recipe.images/image1.png',
        time: '20-45mins',
        serves: 'Serves 4 people',
        description: 'A classic Italian dish made with eggs, cheese (usually Parmesan or Pecorino), pancetta or guanciale, and black pepper. The creamy sauce is created from the eggs and cheese mixed with the pasta water, resulting in a rich and flavorful meal.',
       },
       {id: 2 ,
        name:  'Chicken Alfredo',
        image: './recipe.images/image2.png',
        time: '20-45mins',
        serves: 'Serves 4 people',
        description: 'Is a creamy and comforting pasta dish featuring tender pieces of sautéed or grilled chicken served over fettuccine pasta. The rich Alfredo sauce is made from butter, heavy cream, and Parmesan cheese, creating a velvety texture that perfectly coats the pasta and chicken. It is a simple yet indulgent meal that is popular for its savory, cheesy flavor.',
       },
       {id: 3 ,
        name:  'Penne Arrabbiata',
        image: './recipe.images/image3.png',
        time: '40-55mins',
        serves: 'Serves 4 people',
        description: 'This is a spicy pasta dish featuring penne pasta tossed in a sauce made from garlic, tomatoes, red chili flakes, and olive oil. It is simple yet packed with flavor and heat.',
       },
       {id: 4 ,
        name:  'Cannoli',
        image: './recipe.images/image4.png',
        time: '1hr 30mins',
        serves: 'Makes 12-16 cannoli',
        description: 'A classic Sicilian pastry consisting of tube-shaped shells of fried pastry dough filled with a sweet, creamy ricotta cheese mixture. They often have chocolate chips or candied fruit in the filling.',
       },
       {id: 5 ,
        name:  'Tiramisu',
        image: './recipe.images/image5.png',
        time: '30-45mins',
        serves: 'Serves 6-8 people',
        description: 'Although more of a dessert than a pastry, tiramisu is a beloved Italian treat. It’s made with layers of coffee-soaked ladyfingers and a mascarpone cheese mixture, often flavored with cocoa powder and sometimes a splash of liqueur.',
       },
       {id: 6 ,
        name:  'Sfogliatella',
        image: './recipe.images/image6.png',
        time: '25-40mins',
        serves: 'Serves 8-10 people',
        description: 'Sfogliatella is a delightful Italian pastry with a crispy, layered shell and a soft, sweet filling made of ricotta, semolina, and candied fruit. Its unique, shell-like shape and satisfying texture make it a beloved treat that is as pleasing to the eyes as it is to the taste buds.',
       },
    ];

    return(
        <div>
            <h2>Indulge in our Italian Cuisines</h2>
            <div className="grid-container">
                {recipes.map((recipe) =>(
                   <div key={recipe.id} className="grid-item" onClick={()=>onRecipeClick(recipe.id)} >
                   <img src={recipe.image} alt={recipe.name} className="grid-item" />
                   <div className="overlay">
                   <div className="text">{recipe.description}</div>
                   </div>
                   <h3 className="grid-item2" >{recipe.name}</h3>
                   <span className="grid-item2"> ⏱ : {recipe.time} 
                   <br></br>🍴 : {recipe.serves}</span>
                   {/* <p className="grid-item" >{recipe.description}</p> */}

                   </div>
                )
                )}
            </div>
        </div>
    );
};



export default RecipeList;