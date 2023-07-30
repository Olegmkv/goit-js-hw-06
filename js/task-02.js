const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector ("#ingredients");

const markingIngredients = ingredients.map((ingredient) => {
  const itemOfIngredients = document.createElement("li");
  itemOfIngredients.textContent = ingredient;
  itemOfIngredients.classList = "item";
  return itemOfIngredients;
})

listOfIngredients.append(...markingIngredients);
 