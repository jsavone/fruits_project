let orderItem = $('.orderItem');
let orderTotal = $('.orderTotal');
let orderRow = $('.orderRow');
let vitamins = localStorage.getItem('vitamins');
let checkoutTotal = localStorage.getItem('checkoutTotal');

$(orderRow).html('<td>1</td><td>'+vitamins+'</td><td>'+checkoutTotal+'</td>')
