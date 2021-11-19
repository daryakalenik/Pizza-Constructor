import { pizzaRecipe } from "./recipe.js";
import { userOrderButton } from "./DOMElements.js";
import { makeAnOrder } from "../index.js";

export const orderChecker = function () {
  if (
    pizzaRecipe.firstIngredient.length !== 0 &&
    pizzaRecipe.secondIngredient.length !== 0 &&
    pizzaRecipe.basis &&
    pizzaRecipe.sauce
  ) {
    userOrderButton.disabled = false;
    userOrderButton.addEventListener(`click`, makeAnOrder);
  } else {
    userOrderButton.disabled = true;
    userOrderButton.removeEventListener(`click`, makeAnOrder);
  }
};
