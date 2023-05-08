const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
]
const ingredientsRef = document.querySelector('#ingredients');
const ingredientsList = ingredients.map((item, num) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredients[num];
  newItem.className = "item";
  return newItem;
});
ingredientsRef.append(...ingredientsList);