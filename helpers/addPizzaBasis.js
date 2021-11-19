import { pizzaRecipe } from "./DOMElements.js";
import { currentPrice } from "./DOMElements.js";
import { basePrices } from "./prices.js";

export const addPizzaBasis = function () {
  let counter = 0;
  return function (event) {
    counter++;
    if (event.target.nodeName === `P` && counter < 2) {
      event.target.style.color = `red`;
      const currentBasis = event.target.cloneNode(true);
      currentIngredients.append(currentBasis);
      pizzaRecipe.basis = currentBasis.textContent;
      currentBasis.style.color = "red";
      pizzaRecipe.basis = currentBasis.textContent;
      const basisId = currentBasis.id;
      currentPrice += basePrices[basisId];
      priceSpan.textContent = `${currentPrice}$`;
      checkIngredientsNumber();
    }
  };
};
