fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
.then((response) => response.json())
.then((data) => console.log(data));