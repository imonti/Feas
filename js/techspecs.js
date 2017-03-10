$(document).ready(initialize);

let body;
let tabs_file;
let currentSection = [];
let product = [];
let alias;
let currentSelectedProduct;

function initialize(){

  let argv = window.location.href.split('/');
  argv = argv[ argv.length - 1 ].split('.')[0];

  let product = db[argv];

  $("#differentProducts").append(`<li class="selected">
      <a href="${argv}.html">${product.tab}</a><div></div>
    </li>`);

  if(product.friends){

    for(var i = 0 ; i < product.friends.length ; ++i){

      let friend = db[ product.friends[i] ];
      $("#differentProducts").append(`<li class="notselected">
          <a href="${product.friends[i]}.html">${friend.tab}</a><div></div>
        </li>`);

    }

  }

}