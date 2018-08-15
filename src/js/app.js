/* Función screen splash */
window.setTimeout(() => {
    preview.remove()
    home.style.display = 'block'
}, 2000);

/*  Función filter by input search*/
window.filterRestaurants = (arrRestaurants, search) => {
    console.log('Entré a filterRestaurants');
    console.log(arrRestaurants); //array de restaurants
    console.log(search); //lo que escribe el usuario
    gallery.innerHTML = '';
    arrRestaurants.filter(objRestaurant => {
        if (objRestaurant.name.toUpperCase().includes(search.toUpperCase())) {
            printRestaurants(objRestaurant.name, objRestaurant.adress, objRestaurant.number, objRestaurant.description, objRestaurant.image)
        }
    });
};

/* Función filter by type of food  */

/* $(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});
 */





