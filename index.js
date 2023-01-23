
fetch("https://fruityvice.com/api/fruit/all")
.then(response => response.json())
.then(fruit => console.log(fruit))
