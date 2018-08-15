/* Declaración de variables */
const preview = document.getElementById('preview');
const home = document.getElementById('home');
const searchFood = document.getElementById('searcher');
const gallery = document.getElementById('gallery');

//Función que pinta la data en el documento
/* name, adress, description, image */
const printRestaurants = (name, adress, description, image) => {
  gallery.innerHTML += `
 
  <div class="gallery-product col-lg-4 col-md-4 col-sm-4 col-xs-6">
    <img class="img-responsive" src="${image}" alt="img">
    <span>${name}</span>
    <button type="button" class="btn-modal" data-toggle="modal" data-target="#miModal">Ver más</button>
  </div>
<!-- The Modal -->
<div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                <span>${name}</span>
             </div>
             <!-- Modal body -->
            <div class="modal-body">
                <p>${description}</p>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div> 
</div> `
};


//Petición AJAX, usando el método GET para traer la data JSON.
let arrRestaurants = [];

fetch('../data/restaurants.json')
  .then(res => res.json())
  .then(data => {
    arrRestaurants = data;
    /* console.log(arrRestaurants); */
    arrRestaurants.map(r => {
      printRestaurants(r.name, r.adress, r.description, r.image);
    });
  })
  .catch(error => console.log(error));

/* Eventos del DOM */
searchFood.addEventListener('keyup', (e) => {
  const searchValue = searchFood.value;
  filterRestaurants(arrRestaurants, searchValue);
});

