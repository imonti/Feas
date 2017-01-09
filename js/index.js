var products = [
  {
    "id" : "multipar",
    "img": "img/prods/multipar.png",
    "title" : "Monitores Multiparamétricos"
  },

  {
    "id" : "defi",
    "img": "img/prods/defi.png",
    "title" : "Desfibriladores"
  },

  {
    "id" : "cardiograph",
    "img": "img/prods/cardiograph.png",
    "title" : "Electrocardiógrafos"
  },

  {
    "id" : "heart-attack-cart",
    "img": "img/prods/heart-attack-cart.png",
    "title" : "Carros"
  },

  {
    "id" : "infusion-bomb",
    "img": "img/prods/infusion-bomb.png",
    "title" : "Bombas de Infusión"
  },

  {
    "id" : "monitoring-central",
    "img": "img/prods/monitoring-central.png",
    "title" : "Centrales de monitoreo"
  },

  {
    "id" : "poligrafos",
    "img": "img/prods/poligraph.png",
    "title" : "Polígrafos"
  },

  {
    "id" : "accesorios",
    "img": "img/prods/accessory.png",
    "title" : "Accesorios"
  }

];

var svg = {

  document : `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
  <path d="M19.5 3h0.5l6 7v18.009c0 1.093-0.894 1.991-1.997 1.991h-15.005c-1.107 0-1.997-0.899-1.997-2.007v-22.985c0-1.109 0.897-2.007 2.003-2.007h10.497zM19 4h-10.004c-0.55 0-0.996 0.455-0.996 0.995v23.009c0 0.55 0.455 0.995 1 0.995h15c0.552 0 1-0.445 1-0.993v-17.007h-4.002c-1.103 0-1.998-0.887-1.998-2.006v-4.994zM20 4.5v4.491c0 0.557 0.451 1.009 0.997 1.009h3.703l-4.7-5.5z"></path>
  </svg>`,
  phone : `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="-305 397 32 32" style="enable-background:new -305 397 32 32;" xml:space="preserve">
    <g>
      <path d="M-280.7,427h-0.2c-3.7,0-11.1-3.7-14.8-7.3c-3.6-3.6-7.3-11.1-7.3-14.8v-0.2l0.1-0.1c0.6-0.9,3.8-5.6,5.8-5.6
        c1.6,0,5,3.1,6,5.5c0.6,1.4,0.2,2.2-0.2,2.6c-0.7,0.7-1.5,1.2-2.1,1.5c-1,0.6-1.4,0.9-1.4,1.7c0,1.6,1.8,3.3,3.5,5
        c1.7,1.7,3.5,3.5,5,3.5c0.8,0,1.1-0.4,1.7-1.4c0.4-0.6,0.8-1.3,1.5-2.1l0,0l0,0c0.4-0.4,1.2-0.8,2.6-0.2c2.3,1,5.5,4.4,5.5,6
        c0,2-4.7,5.2-5.6,5.8L-280.7,427z M-302,405c0.1,3.5,3.7,10.5,7.1,13.9c3.4,3.4,10.4,7,13.9,7.1c2.1-1.4,5-3.9,5-4.9
        c0-1-2.7-4.1-4.8-5c-0.7-0.3-1.2-0.3-1.5,0l0,0c-0.6,0.6-1,1.3-1.4,1.9c-0.6,1-1.2,1.9-2.5,1.9c-2,0-3.9-1.9-5.8-3.7
        c-1.8-1.8-3.7-3.7-3.7-5.8c0-1.4,0.9-2,1.9-2.5c0.6-0.4,1.2-0.8,1.9-1.4c0.3-0.3,0.3-0.8,0-1.5c-0.9-2.2-4-4.8-5-4.8
        C-298.1,400-300.6,402.9-302,405z"/>
    </g>
    </svg>`
};

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
      $(document).scrollTop(0);

    }

    onResize();

    let pbody = $(".product-body");
    //let quaternions = pbody.find('.product-quaternion');
    let defaultImage = "img/prods/default.png"
    //Fill products title and descriptions
    for(var i = 0 ; i < products.length ; ++i) {

      let product = products[i];
      //let quat = $(quaternions[Math.floor(i/4)]);

       pbody.append(
        `<div class="product-card" id=${ product.id }>
          <img class="card-image" onerror="if (this.src != 'img/prods/default.png')  this.src = 'img/prods/default.png';">
          <div class="horizontal-line"></div>
          <p class="card-title"></p>
          <div>
            <button class="card-button">
              ${svg.document}
              <p>Ficha Técnica</p>
            </button><div></div>
            <button class="card-button">
              ${svg.phone}
              <p>Contáctenos</p>
            </button>
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

   };

});
