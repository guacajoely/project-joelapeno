import { createHTML } from "./createHTML.js";

const newHTML = createHTML()
 
const parentElement = document.querySelector("#social__container");
parentElement.innerHTML = newHTML

console.log(newHTML)