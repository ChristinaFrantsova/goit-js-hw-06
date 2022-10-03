const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const foodIngredients = document.querySelector("#ingredients");
console.log(foodIngredients);

const ulList = ingredients.map((element) => {
  const foodItem = document.createElement("li");
  foodItem.classList.add("list-item");
  foodItem.textContent = element;
  return foodItem;
});
console.log(ulList);

foodIngredients.append(...ulList);
