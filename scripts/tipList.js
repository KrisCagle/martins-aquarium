import {database} from "./aquariumData.js";
export const tipList = () => {
    let htmlString = ""
    for (const tip of database.tips) {
        htmlString += `
        <article class="tip">
          <ul class="tips">
          <li class="tip"> ${tip.topic} ${tip.text}</li>
          </ul>
        </article>`
    }
    return htmlString
}   