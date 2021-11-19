import {
  basisVar,
  firstIngVar,
  secondIngVar,
  sauceVar,
} from "./DOMElements.js";

const arrElements = basisVar.concat(firstIngVar, secondIngVar, sauceVar);

export const pointer = () => {
  arrElements.forEach((element) => {
    element.style.cursor = `pointer`;
  });
};
