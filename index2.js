

const shibeUrl = "http://shibe.online/api/shibes?count=[1-100]"
function renderShibe() {
fetch(shibeUrl)
.then(function(response) { return response.json(); })
.then(function(shibeData) {
 shibeData.forEach(shibeData => {
    console.log(shibeData);
    img = document.querySelector("#card-image");
    img.src =  shibeData
     

 })
})

}
renderShibe(shibeUrl);







