$(document).ready(function() {
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
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


window.filterRestaurants = (restaurants, search) => {
    console.log('Entré a filterFood');
    console.log(restaurants); //toda la data
    console.log(search); //lo que escribe el usuario

/*     let filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.name.toUpperCase().indexOf(search.toUpperCase()) > -1);
    return filteredRestaurants;
    console.log(filteredRestaurants); */
};

