export const addFirstIngredient = function () {
  let counter = 0;
  return function (event) {
    counter++;
    if (event.target.nodeName === `P` && counter < 3) {
      event.target.style.color = `red`;
      const currentFirstIngredient = event.target.cloneNode(true);
      currentIngredients.append(currentFirstIngredient);
      pizzaRecipe.firstIngredient = currentFirstIngredient.textContent;
      currentFirstIngredient.style.color = "red";
      pizzaRecipe.firstIngredient = currentFirstIngredient.textContent;
      const firstIngredientId = currentFirstIngredient.id;
      currentPrice += firstIngredientPrices[firstIngredientId];
      priceSpan.textContent = `${currentPrice}$`;
      checkIngredientsNumber();
    }
  };
};
