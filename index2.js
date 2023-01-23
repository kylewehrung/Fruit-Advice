fetch("http://shibe.online/api/shibes?count=[1-100]")
.then(function(response) { return response.json(); })
.then(function(data) {
 data.forEach(data => {
    console.log(data);
 })
})










