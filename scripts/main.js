import { fishList, mostHolyFish, soldierFish, regularFish } from "./fishList.js"
import { tipList } from "./tipList.js"
import { locationList } from "./locationList.js"

// Generate HTML strings
const fishHTML = fishList()
const tipHTML = tipList()
const locationHTML = locationList()
const holyFishHTML = mostHolyFish()
const soldierFishHTML = soldierFish()
const regularFishHTML = regularFish()

// Render each one into the correct DOM element
document.querySelector("#fishList").innerHTML = fishHTML `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`
document.querySelector("#tipList").innerHTML = tipHTML
document.querySelector("#locationList").innerHTML = locationHTML
