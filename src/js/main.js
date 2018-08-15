/* Declaración de variables */
const preview = document.getElementById('preview');
const home = document.getElementById('home');
const searchFood = document.getElementById('searcher');
const gallery = document.getElementById('gallery');

//Función que pinta la data en el documento
const printRestaurants = (name, image) => {
    gallery.innerHTML += `
    <div class="gallery-product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
        <img src="../data/image/13.jpg "class="img-responsive" alt="img" width="365" height="365">
        <span>${name}</span>
        <button type="butxton" class="btn-modal" data-toggle="modal" data-target="#miModal">Ver más</button>
    </div>
    
    <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="myModalLabel">${name}</h4>
        </div>
        <div class="modal-body">
        Aquí va la descripción 
        </div>
      </div>
    </div>
  </div>`;
};


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
                console.log(objRestaurant.image);
                /*   let restaurant = Object.values(objRestaurant);
                  console.log(restaurant); */
            }
        }
        arrRestaurants.map(r => {
            printRestaurants(r.name, r.adress, r.description, r.image);
        });

    })
    .catch(error => console.log(error));

/* Eventos del DOM */
searchFood.addEventListener('keyup', () => {
    const searchValue = searchFood.value;
    filterRestaurants(arrRestaurants, searchValue);
});

