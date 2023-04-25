const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = document.querySelector("#ingredients")

const newIngredients = ingredients.map(ingredient =>{
  const elemItem = document.createElement('li');
  elemItem.textContent = ingredient;
  elemItem.classList.add('item');
  return elemItem
})

ingredientsItem.append(...newIngredients)