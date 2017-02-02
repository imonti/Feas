$(document).ready(initialize);

let body;
let tabs_file;
let currentSection = [];
let product = [];
let alias;
let currentSelectedProduct;

function initialize(){

  let argv = window.location.href.split('?');

  tabs_file = argv[1].split('#')[0].trim();

  body = $('.techspecs-body');

  function onLoadComplete(data){

    let lines = data.split('\n');

    for(var i = 0 ; i < lines.length ; ++i){

      parseContent(lines[i], i);

    }

    show(currentProductAlias());

  }

  $.get( `../content/${tabs_file}.tabs`, onLoadComplete );

}

function currentProductAlias(){

  let argv = window.location.href.split('?');
  if(!argv){

    return null;

  }

  let current_product_alias = argv[1].split('#')[1];

  if(current_product_alias){

    return current_product_alias.trim();

  } else {

    return null;

  }

}

function show(product_alias){

  if(currentProductAlias() != product_alias){

    history.replaceState(null, null, `techspecs.html?${tabs_file}#${product_alias}`);

  }

  if(!product[product_alias]){
    return "404";
  }

  body.html(product[product_alias]);

  updateNavbar(product_alias);

}

function updateNavbar(product_alias){

  let currentButton = $('.selected');

  if(currentButton){

    currentButton.toggleClass('selected');

  }

  let targetButton = $(`#${product_alias}`);

  if(targetButton){

    targetButton.toggleClass('selected');

  }

}

function parseContent(line,num){

  let isTab = !!line.match(/^\w/gm);

  if(isTab){

    line = line.split(/\t/g);

    if(line.length < 2){
      console.log("product alias ill defined in tabs");
      return "404";

    }

    alias = line[1].trim();

    let name = line[0].trim();

    $("#differentProducts").append(`
      <div></div>
      <li class='' id=${alias}>
        <a onclick="show('${alias}');">${name}</a>
        <div></div>
      </li>`);

    product[alias] = $('<div></div>');

    return;

  }

  let isTitle = !!line.match(/^\t\w/gm);

  if(isTitle){
    
    title = line.trim();
    
    product[alias].append($(`<h1>${title}</h1>`));

    let div = $('<div></div>');
    currentSection = [div];
    product[alias].append(div);

  } else {

    let isSubtitle = !!line.match(/^\t\t\w/gm);
    if(isSubtitle){

      subtitle = line.trim();

      if(currentSection.length > 0){

        currentSection[0].append(`<h2>${subtitle}</h2>`);

        let div = $('<div></div>');
        currentSection[0].append( div );
        currentSection.push( div );

      } else {

        product[alias].append($(`<h2>${subtitle}</h2>`));

        let div = $('<div></div>');
        currentSection.push( div );
        product[alias].append( div );

      }

    } else {

      let isParagraph = !!line.match(/^\t\t\t\w/gm);
      if(isParagraph){

        let paragraph = line.trim();

        if(currentSection.length > 0){

          currentSection[currentSection.length - 1].append($(`<p>${paragraph}</p>`));

        } else {

          product[alias].append($(`<p>${paragraph}</p>`));

        }

      }

    }

  }

}