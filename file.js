
// url to get fruit image from:
// https://www.iconfinder.com/data/icons/fruits/128/{{fruit}}.png

//api to call to get all of the fruits :
//https://salty-eyrie-86402.herokuapp.com/get_fruits.json
var fruits = ["Tomato", "Apple", "Orange"];



fruits.forEach(function(f){
  $(".fruit_box").append(`
    <div class="fruit_item">
       <img src="https://www.iconfinder.com/data/icons/fruits/128/${f}.png">
    </div>
    `)
})


$.ajax({
  url: "http://fiddle.jshell.net/favicon.png",
})
  .done(function( data ) {

  });
