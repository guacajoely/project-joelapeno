import { getMerchArray } from "./merchDB.js";

export const merchHTML = () => {

    const importedArray = getMerchArray()

    let HTMLString = ''

    for (const merchObject of importedArray){

        HTMLString += `

        <article class="merch__card">
            <img class="merch__img" src="./images/merch-${merchObject.imgid}">
            <a class="merch__link" href="${merchObject.address}">${merchObject.name}</a>
            <div class="merch__info">${merchObject.info}</div>
            <div class="merch__price">${merchObject.price}</div>
            <input type="submit" class="merch__orderBTN" value="Order Now">
        </article>
        
        `

    }

    return HTMLString

}