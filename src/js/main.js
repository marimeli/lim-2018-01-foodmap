/* Declaración de variables */
const preview = document.getElementById('preview');
const home = document.getElementById('home');
const searchFood = document.getElementById('searcher');
const cards = document.getElementById('cards');


//Petición AJAX, usando el método GET para traer la data JSON.
fetch('../data/restaurants.json')
    .then(res => res.json())
    .then(data => {
        const arrRestaurants = data;
        console.log(arrRestaurants);

        let indexRestaurant = Object.keys(arrRestaurants);
        console.log(indexRestaurant); //index de objetos del array

        for (indexRestaurant in arrRestaurants) {
            if (arrRestaurants.hasOwnProperty(indexRestaurant)) {
                const objRestaurant = arrRestaurants[indexRestaurant];
                console.log(objRestaurant.name); //objeto restaurant. name (propiedad)
            }
        }
    });

/*  Función filter */
searchFood.addEventListener('keyup', () => {
    const searchValue = searchFood.value;
    filterRestaurants(arrRestaurants, searchValue);
});

