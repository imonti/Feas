if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

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
   var products = Object.keys(db);

   for(var i = 0 ; i < products.length ; ++i) {

     let product = db[products[i]];

     if(!product.title){
      continue;
     }

     product.id = products[i];

      pbody.append(
       `<div class="product-card" id=${ product.id }>
         <img class="card-image" onerror="if (this.src != 'img/prods/default.png')  this.src = 'img/prods/default.png';">
         <div class="horizontal-line"></div>
         <p class="card-title"></p>
         <div>
           <button class="card-button" id="${product.id}-button">
             <svg role="img">
                 <use xlink:href="img/icons/svg-defs/svg-symbols.svg#document"/>
             </svg>
             <p>Ficha Técnica</p>
           </button><div></div>
           <button class="card-button">
             <svg role="img">
                 <use xlink:href="img/icons/svg-defs/svg-symbols.svg#phone"/>
             </svg>
             <p>Contáctenos</p>
           </button>
         </div>
       </div>`);

      $(`#${product.id}-button`).click(()=>{

         window.location = `products/${product.id}.html`;

      });

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
