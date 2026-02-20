import {database} from "./aquariumData.js";
export const locationList = () => {
    let htmlString = ""
    for (const location of database.locations) {
        htmlString += `
        <article class="locations">
        <h3>${location.name}</h3>
        <section class="location">${location.description}</section>
        </article>`
    }
    return htmlString
}