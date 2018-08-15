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
        /* console.log(arrRestaurants); */
        let indexRestaurant = Object.keys(arrRestaurants);
        console.log(indexRestaurant); //index de objetos del array

        for (indexRestaurant in arrRestaurants) {
            if (arrRestaurants.hasOwnProperty(indexRestaurant)) {
                const objRestaurant = arrRestaurants[indexRestaurant];
                console.log(objRestaurant); //el objeto con todas sus propiedades
                console.log(objRestaurant.name); //objeto restaurant. name (propiedad)
                /*   let restaurant = Object.values(objRestaurant);
                  console.log(restaurant); */
            }
        }
    });

/*  Función filter */
const filterRestaurants = (restaurants, search) => {
    console.log('Entré a filterFood');
    console.log(restaurants); //toda la data
    console.log(search); //lo que escribe el usuario
    /*  cards.innerHTML = ''; */

    /*  let filteredRestaurants = restaurants.filter(restaurant =>
         restaurant.name.toUpperCase().indexOf(search.toUpperCase()) > -1);
     return filteredRestaurants;
     console.log(filteredRestaurants); */

    restaurants.filter(objRestaurant => {
        if (objRestaurant.name.toUpperCase().includes(search.toUpperCase())) {
            console.log(objRestaurant.name);
        }
    });

};


/* Eventos del DOM */
searchFood.addEventListener('keyup', () => {
    const searchValue = searchFood.value;
    filterRestaurants(restaurants, searchValue);
});


