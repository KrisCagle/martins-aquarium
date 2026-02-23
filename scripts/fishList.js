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
export const mostHolyFish = () => {
  let holyFish = ""
  for (const fish of database.fish) {
    if (fish.length % 3 === 0) {
      holyFish += `
      <article class="fish">
        <img src="${fish.image}" alt="${fish.name} the ${fish.species}" />
        <h3>${fish.name}</h3>
        <p><strong>Species:</strong> ${fish.species}</p>
        <p><strong>Length:</strong> ${fish.length}</p>
        <p><strong>Location:</strong> ${fish.location}</p>
      </article>
    `
    }
  }
  return holyFish
};
export const soldierFish = () => {
  let soldiers = ""
  for (const fish of database.fish) {
    if (fish.length % 5 === 0) {
      soldiers += `
      <article class="fish">
        <img src="${fish.image}" alt="${fish.name} the ${fish.species}" />
        <h3>${fish.name}</h3>
        <p><strong>Species:</strong> ${fish.species}</p>
        <p><strong>Length:</strong> ${fish.length}</p>
        <p><strong>Location:</strong> ${fish.location}</p>
      </article>
    `
    }
  }
  return soldiers
}

export const regularFish = () => {
  let regulars = ""
  for (const fish of database.fish) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
      regulars += `
      <article class="fish">
        <img src="${fish.image}" alt="${fish.name} the ${fish.species}" />
        <h3>${fish.name}</h3>
        <p><strong>Species:</strong> ${fish.species}</p>
        <p><strong>Length:</strong> ${fish.length}</p>
        <p><strong>Location:</strong> ${fish.location}</p></article>
    `
    }
  }
  return regulars
}
