import { database } from "./aquariumData.js";

export const fishList = () => {
  let htmlString = ""

  for (const fish of database.fish) {
    htmlString += `
      <article class="fish">
        <img src="${fish.image}" alt="${fish.name} the ${fish.species}" />
        <h3>${fish.name}</h3>
        <p><strong>Species:</strong> ${fish.species}</p>
        <p><strong>Length:</strong> ${fish.length}</p>
        <p><strong>Location:</strong> ${fish.location}</p>
        <p><strong>Diet:</strong> ${fish.diet}</p>
      </article>
    `
  }

  return htmlString
};