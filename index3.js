// Global constants
//https://fruityvice.com/api/fruit/all
const fruitUrl = ' http://localhost:3000/fruit'
const shibeUrl = "http://shibe.online/api/shibes?count=[1-100]"
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
const fruitTitle = document.querySelector("#card-title")
let number = 0
// let fruitArray;
// End global constants


function renderShibe() {
fetch(shibeUrl)
.then(function(response) { return response.json(); })
.then(function(shibeData) { 
 shibeData.forEach(shibeData => {
    console.log(shibeData);
    img = document.querySelector("#card-image");
    img.src = shibeData
     
 })
})
}


function getFruitInfo(url){
    fetch(url)
    .then(response => response.json())
    .then(fruit => {
        console.log(fruit)
        fruit.forEach(getFruitNames)})
        // getFruitNames(fruitArray[0])
}

function getFruitNames(fruitObj){
    // want to get the fruit name
    //put it on the list on left side of screen
    //Click event to open up fruit info
    const fruitList = document.querySelector("#fruit-list")
    const h2 = document.createElement('h2') //changed h1 to h2 to format
    h2.textContent = fruitObj.name
    fruitList.append(h2)
    h2.addEventListener("click", (e) => renderFruitDetail(fruitObj) )
}

function renderFruitDetail(fruitObj) {
    order.textContent = fruitObj.order
    family.textContent = fruitObj.family
    genus.textContent = fruitObj.genus
    calories.textContent = `Calories: ${fruitObj.nutritions.calories}`
    carbohydrates.textContent = `Carbohydrates: ${fruitObj.nutritions.carbohydrates}`
    protein.textContent = `Protein: ${fruitObj.nutritions.protein}`
    fat.textContent = `Fat: ${fruitObj.nutritions.fat}`
    sugar.textContent = `Sugar: ${fruitObj.nutritions.sugar}`
    fruitTitle.textContent = fruitObj.name
}

button.addEventListener("click", increaseLikes)

function increaseLikes(){
    number++;
    likes.textContent = number + " likes"
}

console.log(button)

getFruitInfo(fruitUrl)

renderShibe(shibeUrl)