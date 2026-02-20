import { fishList } from "./fishList.js"
import { tipList } from "./tipList.js"
import { locationList } from "./locationList.js"

// Generate HTML strings
const fishHTML = fishList()
const tipHTML = tipList()
const locationHTML = locationList()

// Render each one into the correct DOM element
document.querySelector("#fishList").innerHTML = fishHTML
document.querySelector("#tipList").innerHTML = tipHTML
document.querySelector("#locationList").innerHTML = locationHTML