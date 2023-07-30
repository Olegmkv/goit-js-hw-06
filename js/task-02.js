const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector ("#ingredients");

// створюємо в памяті розмітку переліку інгредієнтів
const markingIngredients = ingredients.map((ingredient) => {
  const itemOfIngredients = document.createElement("li");
  itemOfIngredients.textContent = ingredient;
  itemOfIngredients.classList = "item";
  return itemOfIngredients;
})

//додаємо однією операцією розмітку
listOfIngredients.append(...markingIngredients);
 