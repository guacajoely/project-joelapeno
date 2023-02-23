import { getSocialArray } from "./database.js";

export const createHTML = () => {

    const importedArray = getSocialArray()

    let HTMLString = ''

    for (const socialObject of importedArray){

        HTMLString += `
        
        <article class="social__card" id="${socialObject.id}__card">
            <img class="social__icon" src="./images/icon-${socialObject.id}.png">
            <a class="social__link" href="${socialObject.address}">${socialObject.username}</a>
            <div class="social__info">${socialObject.info}</div>
        </article>
        
        `

    }

    return HTMLString

}
