//Función screen splash
window.setTimeout(() => {
    preview.remove()
    home.style.display = 'block'
  }, 2000);

/*  Función filter */
window.filterRestaurants = (restaurants, search) => {
    console.log('Entré a filterFood');
    console.log(restaurants); //toda la data
    console.log(search); //lo que escribe el usuario

    let indexRestaurant = Object.keys(restaurants);
        console.log(indexRestaurant); //index de objetos del array

        for (indexRestaurant in restaurants) {
            if (restaurants.hasOwnProperty(indexRestaurant)) {
                const objRestaurant = restaurants[indexRestaurant];
                console.log(objRestaurant); //el objeto con todas sus propiedades
            }
        }
};

/*  Función filter by type of food */
$(document).ready(function() {
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value === "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});

