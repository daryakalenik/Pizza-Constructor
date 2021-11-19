import { prices } from "./helpers/prices.js";
import {
  pizzaImg,
  priceSpan,
  basis,
  firstIngredient,
  secondIngredient,
  sauce,
  basisVar,
  firstIngVar,
  secondIngVar,
  sauceVar,
  userOrderButton,
  currentIngredients,
} from "./helpers/DOMElements.js";
import { pizzaRecipe } from "./helpers/recipe.js";
import { pointer } from "./helpers/pointer.js";
import { orderChecker } from "./helpers/orderChecker.js";

userOrderButton.disabled = true;
let currentPrice = 0;
pointer();
let imageNumber = 0;
pizzaImg.src = `./images/slices${imageNumber}.png`;

basis.addEventListener(`click`, addPizzaBasis);

function addPizzaBasis(event) {
  if (
    event.target.nodeName === `P` &&
    !event.target.classList.contains(`active`)
  ) {
    event.target.classList.add(`active`);
    const currentBasis = event.target.cloneNode(true);
    currentIngredients.append(currentBasis);
    pizzaRecipe.basis = currentBasis.textContent;
    pizzaRecipe.basis = currentBasis.textContent;
    const basisId = currentBasis.id;
    currentPrice += prices[basisId];
    priceSpan.textContent = `${currentPrice}$`;
    basis.removeEventListener(`click`, addPizzaBasis);
    orderChecker();
    imageNumber++;
    return (pizzaImg.src = `./images/slices${imageNumber}.png`);
  }
}

firstIngredient.addEventListener(`click`, addFirstIngredient);

function addFirstIngredient(event) {
  if (
    event.target.nodeName === `P` &&
    [...firstIngredient.getElementsByClassName(`active`)].length < 2 &&
    !event.target.classList.contains(`active`)
  ) {
    event.target.classList.add(`active`);
    const currentFirstIngredient = event.target.cloneNode(true);
    currentIngredients.append(currentFirstIngredient);
    pizzaRecipe.firstIngredient.push(currentFirstIngredient.textContent);
    const firstIngredientId = currentFirstIngredient.id;
    currentPrice += prices[firstIngredientId];
    priceSpan.textContent = `${currentPrice}$`;
    orderChecker();
    if ([...firstIngredient.getElementsByClassName(`active`)].length === 2) {
      firstIngredient.removeEventListener(`click`, addFirstIngredient);
    }
    if ([...firstIngredient.getElementsByClassName(`active`)].length === 1) {
      imageNumber++;
      if (imageNumber < 5 && imageNumber > -1) {
        return (pizzaImg.src = `./images/slices${imageNumber}.png`);
      }
    }
  }
  orderChecker();
}

secondIngredient.addEventListener(`click`, addSecondIngredient);

function addSecondIngredient(event) {
  if (
    event.target.nodeName === `P` &&
    [...secondIngredient.getElementsByClassName(`active`)].length < 2 &&
    !event.target.classList.contains(`active`)
  ) {
    event.target.classList.add(`active`);
    const currentSecondIngredient = event.target.cloneNode(true);
    currentIngredients.append(currentSecondIngredient);
    pizzaRecipe.secondIngredient.push(currentSecondIngredient.textContent);
    const secondIngredientId = currentSecondIngredient.id;
    currentPrice += prices[secondIngredientId];
    priceSpan.textContent = `${currentPrice}$`;
    orderChecker();
    if ([...secondIngredient.getElementsByClassName(`active`)].length === 2) {
      secondIngredient.removeEventListener(`click`, addSecondIngredient);
    }
    if ([...secondIngredient.getElementsByClassName(`active`)].length === 1) {
      imageNumber++;
      if (imageNumber < 5 && imageNumber > -1) {
        return (pizzaImg.src = `./images/slices${imageNumber}.png`);
      }
    }
  }
  orderChecker();
}

sauce.addEventListener(`click`, addSauce);

function addSauce(event) {
  if (
    event.target.nodeName === `P` &&
    !event.target.classList.contains(`active`)
  ) {
    event.target.classList.add(`active`);
    const currentSauce = event.target.cloneNode(true);
    currentIngredients.append(currentSauce);
    pizzaRecipe.sauce = currentSauce.textContent;
    pizzaRecipe.sauce = currentSauce.textContent;
    const sauceId = currentSauce.id;
    currentPrice += prices[sauceId];
    priceSpan.textContent = `${currentPrice}$`;
    sauce.removeEventListener(`click`, addSauce);
    orderChecker();
    imageNumber++;
    return (pizzaImg.src = `./images/slices${imageNumber}.png`);
  }
  orderChecker();
}

currentIngredients.addEventListener(`click`, deleteIngredient);

function deleteIngredient(event) {
  event.target.remove();
  const currentDeletedElement = document.getElementById(event.target.id);
  function removePrice() {
    return (currentPrice = currentPrice - prices[currentDeletedElement.id]);
  }
  if (currentDeletedElement.parentNode.id === `basis`) {
    currentDeletedElement.classList.remove(`active`);
    removePrice();
    priceSpan.textContent = `${currentPrice}$`;
    pizzaRecipe[document.getElementById(event.target.id).parentNode.id] = ``;
    basis.addEventListener(`click`, addPizzaBasis);
    orderChecker();
    imageNumber--;
    return (pizzaImg.src = `./images/slices${imageNumber}.png`);
  } else if (currentDeletedElement.parentNode.id === `sauce`) {
    currentDeletedElement.classList.remove(`active`);
    removePrice();
    priceSpan.textContent = `${currentPrice}$`;
    pizzaRecipe[document.getElementById(event.target.id).parentNode.id] = ``;
    sauce.addEventListener(`click`, addSauce);
    orderChecker();
    imageNumber--;
    return (pizzaImg.src = `./images/slices${imageNumber}.png`);
  } else if (currentDeletedElement.parentNode.id === `firstIngredient`) {
    currentDeletedElement.classList.remove(`active`);
    pizzaRecipe[currentDeletedElement.parentNode.id].splice(
      pizzaRecipe[currentDeletedElement.parentNode.id].indexOf(
        currentDeletedElement.textContent
      ),
      1
    );
    removePrice();
    priceSpan.textContent = `${currentPrice}$`;
    orderChecker();
    firstIngredient.addEventListener(`click`, addFirstIngredient);
    if (pizzaRecipe[currentDeletedElement.parentNode.id].length === 0) {
      imageNumber--;
      return (pizzaImg.src = `./images/slices${imageNumber}.png`);
    }
  } else if (currentDeletedElement.parentNode.id === `secondIngredient`) {
    secondIngredient.addEventListener(`click`, addSecondIngredient);
    currentDeletedElement.classList.remove(`active`);
    pizzaRecipe[currentDeletedElement.parentNode.id].splice(
      pizzaRecipe[currentDeletedElement.parentNode.id].indexOf(
        currentDeletedElement.textContent
      ),
      1
    );
    removePrice();
    priceSpan.textContent = `${currentPrice}$`;
    orderChecker();
    secondIngredient.addEventListener(`click`, addSecondIngredient);
    if (pizzaRecipe[currentDeletedElement.parentNode.id].length === 0) {
      imageNumber--;
      return (pizzaImg.src = `./images/slices${imageNumber}.png`);
    }
  }
}

export function makeAnOrder() {
  console.log(pizzaRecipe);
  console.log(`Price: ${currentPrice}$`);
  alert(`congrats, you made an order!`);
}
