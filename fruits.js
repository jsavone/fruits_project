
var fruit1 = $('.fruit1');
var fruit2 = $('.fruit2');
var price = $('.price');
var prodDesc = $('.productDesc');
var fruit1Title = '';
var fruit2Title = '';
var fruit1Picked = 0;
var fruit2Picked = 0;
var currFruit1 = '';
var fruit1Price = 0;
var fruit2Price = 0;
var vitaminType = 'Caplets';

fetch('https://agile-inlet-36787.herokuapp.com/get_fruits.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
        data.data.forEach(function(f){
          $("#fruitList").append(`
            <div class="fruitItem" title="${f.name}" price="${f.price}">
               <img src="${f.url}">
               <div style="text-align:center"> ${f.name} </div>
            </div>
            `)
        })
      });

$(document).on('click', '.fruitItem', function(){
  let selectedFruit = $(`<img src="https://www.iconfinder.com/data/icons/fruits/128/${$(this).attr('title')}.png">`);
    if (fruit1Picked === 0) {
      fruit1Title = $(this).attr('title');
      currFruit1 = selectedFruit;
      selectedFruit.appendTo(fruit1);
      fruit1Price = Number($(this).attr('price'));
      fruit1Picked++;
      $(prodDesc).html(`<h3 id="flavorChoice">${fruit1Title}<span id="vitaminType"> ${vitaminType}</span></h3>`);
    }
    else if (fruit2Picked === 0) {
      fruit2Title = $(this).attr('title');
      selectedFruit.appendTo(fruit2);
      fruit2Picked++;
      fruit2Price = Number($(this).attr('price'));

      if ($(this).attr('title') !== fruit1Title) {
        $(prodDesc).html(`<h3 id="flavorChoice">${fruit1Title} and ${fruit2Title} <span id="vitaminType"> ${vitaminType}</span></h3>`);
      }

    }else{
      fruit2Price = fruit1Price;
      fruit2Title = fruit1Title;
      fruit1Title = $(this).attr('title');
      fruit1Price = Number($(this).attr('price'));
      $(fruit2).html(currFruit1);
      $(fruit1).html(selectedFruit);
      currFruit1 = selectedFruit;

      let prodDescResult = (($(this).attr('title') == fruit2Title)) ? `${fruit1Title}` : `${fruit1Title} and ${fruit2Title}`;

      $(prodDesc).html(`<h3 id="flavorChoice">${prodDescResult} <span id="vitaminType"> ${vitaminType}</span></h3>`);
    };
    $(price).html(`<h3 id="checkoutTotal">$${(fruit1Price+fruit2Price).toFixed(2)} per 10</h3>`);
});

$(document).on('click', '.vitOptions button', function() {
  $('#vitaminType').text($(this).text());
});

$(document).on('click', '#checkout', function() {
  let flavorChoice = $('#flavorChoice')
  let checkoutTotal = $('#checkoutTotal')
  localStorage.setItem('vitamins', $(flavorChoice).text());
  localStorage.setItem('checkoutTotal', $(checkoutTotal).text());
  window.location.href='checkout.html';
});

$(document).on('click', '#clear', function() {
  currFruit1 = '';
  fruit1Title = '';
  fruit2Title = '';
  fruit1Picked = 0;
  fruit2Picked = 0;
  fruit1Price = 0;
  fruit2Price = 0;
  $(fruit1).html('');
  $(fruit2).html('');
  $(prodDesc).html('<h3>Please Select Your Flavors</h3>');
  $(price).html('<h3>Total: $0.00</h3>');
});
