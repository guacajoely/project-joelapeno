import { createHTML } from "./createHTML.js";
import { merchHTML } from "./merchHTML.js";

const newHTML = createHTML()
 
const parentElement = document.querySelector("#social__container");
parentElement.innerHTML = newHTML

console.log(newHTML)

const newMerchHTML = merchHTML()
 
const merchParentElement = document.querySelector("#merch__container");
merchParentElement.innerHTML = newMerchHTML

console.log(newMerchHTML)