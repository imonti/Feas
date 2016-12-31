// Agency Theme JavaScript

$(document).ready(function () {
  "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    //$(window).resize(onResize);

    function onResize() {

      let _height = $(window).height()

      $(".content").css("padding-top", _height * 0.1);
      $(".title").css("height", _height * 0.8);
      $(".caret").css("height", _height * 0.1);

    }

    onResize();

    $.getJSON('content/sp.json', function(data) {

      var pbody = $(".product-body");
      let defaultImage = "img/prods/default.png"

      //Fill products title and descriptions
      $.each(data.product, function(i, product) {

         pbody.append(
          `<div class="product-card" id=${ product.id }>
            <div class="product-card-inner">
              <div class="card-image-container">
                <img class="card-image" onerror="if (this.src != 'img/prods/default.png')  this.src = 'img/prods/default.png';">
              </div>
              <div class="card-description">
                <div class="card-description-inner">
                  <p class="card-title"></p>
                  <div class="card-buttons">
                    <a href="#">Ficha técnica</a> | <a href="#">Contáctenos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>`);

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

         }

     });
   });
});
