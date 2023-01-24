// Global constants
const fruitUrl = 'http://localhost:3000/fruit'
const commonName = document.querySelector("#common-name")
const order = document.querySelector("#order")
const family = document.querySelector("#family")
const genus = document.querySelector("#genus")
const carbohydrates = document.querySelector("#carbohydrates")
const protein = document.querySelector("#protein")
const fat = document.querySelector("#fat")
const calories = document.querySelector("#calories")
const sugar = document.querySelector("#sugar")
const button = document.querySelector('#like-button')
const likes = document.querySelector('#like-count')
let number = 0
// End global constants


function getFruitInfo(url){
    fetch(url)
    .then(response => response.json())
    .then(fruit => {
        console.log(fruit)
        fruit.forEach(getFruitNames)})
}

function getFruitNames(fruitObj){
    // want to get the fruit name
    //put it on the list on left side of screen
    //Click event to open up fruit info
    const fruitList = document.querySelector("#fruit-list")
    const h1 = document.createElement('h1')
    h1.textContent = fruitObj.name
    fruitList.append(h1)
    h1.addEventListener("click", (e) => renderFruitDetail(fruitObj) )
}

function renderFruitDetail(fruitObj) {
    commonName.textContent = fruitObj.name
    order.textContent = fruitObj.order
    family.textContent = fruitObj.family
    genus.textContent = fruitObj.genus
    calories.textContent = `Calories: ${fruitObj.nutritions.calories}`
    carbohydrates.textContent = `Carbohydrates: ${fruitObj.nutritions.carbohydrates}`
    protein.textContent = `Protein: ${fruitObj.nutritions.protein}`
    fat.textContent = `Fat: ${fruitObj.nutritions.fat}`
    sugar.textContent = `Sugar: ${fruitObj.nutritions.sugar}`
}

button.addEventListener("click", increaseLikes)

function increaseLikes(){
    number++;
    likes.textContent = number + " likes"
}

console.log(button)

getFruitInfo(fruitUrl)
