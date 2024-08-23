import React from "react";

const recipes = [
  {
    image: "./src/images/spaghetti-carbonara.jpg",
    name: "Spaghetti Carbonara",
    ingredients: [
      "200g spaghetti",
      "2 teaspoons olive oil",
      "100g guanciale or pancetta",
      "4 tablespoons dry white vermouth or wine",
      "1 egg yolk",
      "1 whole egg",
      "4 tablespoons freshly grated parmesan cheese",
      "a grind of black pepper",
      "a grating of fresh nutmeg",
      "20g unsalted butter",
    ],
    instructions: [
      "Cook the spaghetti according to the package instructions.",
      "While the spaghetti is cooking, heat the olive oil in a pan and fry the guanciale or pancetta until crispy.",
      "In a bowl, whisk together the egg yolk, whole egg, and parmesan cheese.",
      "Once the spaghetti is cooked, drain it and add it to the pan with the guanciale.",
      "Remove the pan from the heat and stir in the egg mixture.",
      "Season with black pepper and nutmeg, then serve.",
    ],
  },
  {
    image: "./src/images/chicken-alfredo-pasta.jpg",
    name: "Chicken Alfredo",
    ingredients: [
      "200g fettuccine",
      "2 chicken breasts",
      "1 tablespoon olive oil",
      "1 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Chopped parsley for garnish",
    ],
    instructions: [
      "Cook the fettuccine according to the package instructions.",
      "Season the chicken breasts with salt and pepper, then cook them in olive oil until golden brown.",
      "Remove the chicken from the pan, slice it, and set it aside.",
      "In the same pan, add garlic and sauté until fragrant.",
      "Add the heavy cream and parmesan cheese, stirring until the sauce thickens.",
      "Add the cooked fettuccine and chicken slices to the pan and toss to coat in the sauce.",
      "Garnish with chopped parsley and serve.",
    ],
  },
  {
    image: "./src/images/penne-arrabiata.jpg",
    name: "Penne Arrabiata",
    ingredients: [
      "1 teaspoon olive oil",
      "1 cup chopped onion",
      "4 cloves grarlic,minced",
      "2 cans of peeled and diced tomatoes",
      "3/8 cup red wine",
      "2 tablespoons tomato paste",
      "1 tablespoon white sugar",
      "1 tablespoon chopped fresh basil",
      "1 tablespoon lemon juice",
      "1 tablespoon crushed red pepper flakes",
      "1/2 teaspoon italian seasoning",
      "1/4 teaspoon ground black pepper",
      "2 tablespoons chopped fresh parsely",
    ],
    instructions: [
      "Heat oil in a large skillet or saucepan over median heat. Add onion and garlic; cook and stir until softened, about 5 minutes.",
      "Stir in diced tomatoes, wine, tomato paste, sugar, basil, lemon juice, red pepper flakes, italian seasoning, and black pepper; bring to a boil. Reduce heat to medium and simmer, uncovered, for about 15 minutes.",
      "Stir in parsely. Ladle sauce over hot cooked pasta of your choice.",
      "Serve hot and enjoy!",
    ],
  },
  {
    image: "./src/images/cannoli.jpg",
    name: "Cannoli",
    ingredients: [
      "8 cannolli shells, homemade or store bought will work",
      "2 cups ricotta cheese",
      "1 cup confectioner's sugar, plus extra for dusting",
      "3/4 cup mini chocolate chips, divided",
      "1 and 1/2 teaspoons pure vanilla extract",   
    ],
    instructions: [
      "Make the cannolli dough. Cover with storage wrap and chilli for atleast an hour.",
      "Divide the dough into three balls and flatten each one.",
      "Roll each ball through the pasta machine until it has reached the thinniest setting.",
      "Use a cutter to cut the dough into circles. Dust with flour and roll around cannolli tubes.",
      "Seal with egg white and fry the tubes in hot oil. Remove the tubes.",
      "Make the filling and pipe it into the cooled shells. Dust with sugar to serve.",
    ],
  },
  {
    image: "/src/images/tiramisu",
    name: "Tiramisu",
    ingredients: [
      "Egg yolks",
      "Sugar",
      "Milk",
      "Cream",
      "Vanilla",
      "Mascarpone",
      "Coffee",
      "Rum",
      "Ladyfingers",
      "Cocoa powder",
    ],
    instructions: [
      "Make the filling: Cook the egg yolks, sugar, and milk until slightly thickened. Let it cool slightly, then chill in the fridge for about an hour. When the filling has fully chilled, mix in mascarpone cheese.",
      "Make the whipped cream: Beat heavy cream with vannilla extract until stiff peaks form.",
      "Soak the ladyfingers: Combine coffee and rum in a small bowl. Pour mixture over ladyfingers that have been split in half lengthwise.",
      "Assemble the tiramisu: Line the bottom of a baking dish with soaked ladtfingers. Spread half of the mascarpone mixture over the ladyfingers, then half of the whipped cream over that. Repeat in the same order. Dust with cocoa powder.",
    ],
  },
  {
    image: "/src/images/sfogliatella.jpg",
    name: "Sfogliatella",
    ingredients: [
      "480g Bread flour",
      "4g Salt",
      "200g Water",
      "25g Runny Honey",
      "480g Whole milk",
      "2g Cinnamon",
      "5g Vannilla extract",
      "150g Semolina",
      "425g Ricotta",
      "50g Egg yolk",
      "100g Chopped candied orange peel",
      "150g Softened or melted butter(for layering)",
      "20g Powdered sugar(for dusting)", 
    ],
    instructions: [
      "In a large bowl combine the bread flour, salt, water, and runny honey. Combine to a shaggy dough and turn out unto a clean surface. Kneed dough until it comes together in to a rough ball, flatten into a square, wrap and chill for 30 minutes. ",
      "Unwrap and divide into three pieces. Using a a pasta machine on the latest setting, feed each through once, combine end-to-end to make one long piece and feed it through again.",
      "Using liberal amounts of flour, feed the sfogliatella dough through the pasta machine, decreasing the thickness until a couple clicks off the finest settings.",
      "Wrap around a rolling pin using something (two bowls or a holder of some kind) to allow free rotation.",
      "With your softened or melted butter to hand, start unraveling your sfogliatta dough from the rolling pin. Before adding any butter, start a roll at the end, then smear and cover the section from the roll end to the rolling pin with butter.",
      "Stretch the dough as wide and as thin as it can go. Working one section at a at a time, rolling it tightly into a log, butter, stretch, roll, until you have a large roll of papery thin dough coated with throughout.", 
      "Cover the log with butter, wrap and chill for 1-2 hours.",
      "While chilling, make your semolina ricotta filling. Take a large sauce pan and add whole milk, sugar, salt, cinnamon, and vannilla extract. Bring to a boil.",
      "Reduce heat to asimmer, and slowly add the semolina while stirring the whole time. Continue to stir until pulling away from the sides and thickened. Remove from the heat.",
      "In a food processor, add your ricotta a blitz for a minute or so until smooth. Add the egg yolks and semolina mix, and run until smooth. Add chopped candied orange peels and mix by hand. Cover and set aside until room temperature or chilled.",
      "Preheat oven to 190 degree celcius.",
      "Remove the chilled sfogliatella dough log from the refrigerator and unwrap. Cut off the ends and discard. Divide into 2.5 cm pieces and place on a lined sheet tray.",
      "Fill pastry bag with the room temperature or chilled semolina ricotta filling.",
      "Smear butter over the top of each cut dough round, and using the palm of your hand flatten slightly. Using your fingers in a pinching motion, shape each into a cone shape, pipe in a bit of filling and seal the ends.",
      "Repeat until all the sfogliatella are filled and sealed. Bake on the middle rack of the ovenfor 30 minutes or until golden brown.",
      "Remove from the oven and place individually on a cooling rack. Dust with powdered sugar and enjoy!",
    ]
  }
];


const RecipeDetails = () => {
  return (
    <div>
      <h1>Easy To Follow Recipes</h1>
      {recipes.map((recipe, ig) => (
        <div key={ig}>
          <h2>{recipe.name}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.map((instruction, ins) => (
              <li key={ins}>{instruction}</li>
            ))}
          </ol>
        </div>
      ))}
      <button>GO BACK</button>
    </div>
  );
};

  
export default RecipeDetails;