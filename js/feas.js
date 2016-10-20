// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $.getJSON('content/sp.json', function(data) {
      //Fill products title and descriptions
       $.each(data.product, function(i, product) {

         var card = $('#'+product.id);


         if (card) {

           var image = card.find('.card-image');


           if(image) {

             image.attr('src', product.img);

           }

           var title = card.find('.card-title');

           if(title){

             title.text(product.title)

           }

           var description = card.find('.card-description');

           if(description){

             description.text(product.desc);

           }

         }

     });
   });

})(jQuery); // End of use strict
