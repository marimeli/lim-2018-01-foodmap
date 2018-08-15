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

    let objRestaurant = Object.keys(arrRestaurants);
    console.log(objRestaurant); //index de objetos del array

  for (objRestaurant in arrRestaurants) {
      if (arrRestaurants.hasOwnProperty(objRestaurant)) {
          const x = arrRestaurants[objRestaurant];
          console.log(x.name); //objeto restaurant. name (propiedad)
      }
  }
    });

/*  Función filter */
searchFood.addEventListener('keyup', () => {
    const searchValue = searchFood.value;
    filterRestaurants(arrRestaurants, searchValue);
});

