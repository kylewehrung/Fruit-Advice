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
const submitButton = document.querySelector("#fruit-form")
const likes = document.querySelector('#like-count')
const fruitTitle = document.querySelector("#card-title")
let number = 0
// End global constants

function renderShibe() {
  fetch(shibeUrl)
  .then(response => response.json())
  .then(shibeData => {
    shibeData.forEach(shibeData => {
      img = document.querySelector("#card-image")
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
}

// This function gets the fruit names from the db.json and adds them to the column on the left
function getFruitNames(fruitObj){
    const fruitList = document.querySelector("#fruit-list")
    const h2 = document.createElement('h2') //changed h1 to h2 to format
    h2.textContent = fruitObj.name
    fruitList.append(h2)
    h2.addEventListener("click", (e) => renderFruitDetail(fruitObj) )
}

// This function renders the fruit detail (nutrition facts) on the right side of the image
function renderFruitDetail(fruitObj) {
    order.textContent = `Order: ${fruitObj.order}`
    family.textContent = `Family: ${fruitObj.family}`
    genus.textContent = `Genus: ${fruitObj.genus}`
    calories.textContent = `Calories: ${fruitObj.nutritions.calories}`
    carbohydrates.textContent = `Carbohydrates: ${fruitObj.nutritions.carbohydrates}`
    protein.textContent = `Protein: ${fruitObj.nutritions.protein}`
    fat.textContent = `Fat: ${fruitObj.nutritions.fat}`
    sugar.textContent = `Sugar: ${fruitObj.nutritions.sugar}`
    fruitTitle.textContent = fruitObj.name
    
}


// This button and function increments the likes when the button is pushed
button.addEventListener("click", increaseLikes)
function increaseLikes(){
    number++;
    likes.textContent = number + " likes"
}

// This button and function allow you to add new fruit and information in to the HTML
submitButton.addEventListener("submit", submitNewFruit)
function submitNewFruit(e) {
  e.preventDefault()
  const newName = e.target[0].value
  const newOrder = e.target[1].value
  const newFamily = e.target[2].value
  const newGenus = e.target[3].value
  const newCarbohydrates = e.target[4].value
  const newProtein = e.target[5].value
  const newFat = e.target[6].value
  const newCalories = e.target[7].value
  const newSugar = e.target[8].value
  const newFruitObj = {
    name: newName,
    order: newOrder,
    family: newFamily,
    genus: newGenus,
    nutritions: {
      carbohydrates: newCarbohydrates,
      protein: newProtein,
      fat: newFat,
      calories: newCalories,
      sugar: newSugar,
    }
  }
  getFruitNames(newFruitObj)
  submitButton.reset()
}

console.log(button)
getFruitInfo(fruitUrl)
renderShibe(shibeUrl)
// Code ends here, the below function is a collapsible object that is being worked on




// function editFunc () {
// const editButton = document.createElement('button')
// editButton.textContent = "Edit Fruit"

// const divDropDown = document.querySelector("#drop-down")
// divDropDown.append(editButton)
// editButton.addEventListener("click", () => {
// const editForm = document.querySelector("#edit-form")

// if (editForm.style.display === "none") {
//   editForm.style.display = "block";
// } else {
//   editForm.style.display = "none";
// }
// })
// }
// editFunc() 
//I feel like it's close. The inputs are made, but not being displayed for whatever reason. idk my brain is fried 
