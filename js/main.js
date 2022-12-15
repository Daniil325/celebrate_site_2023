$(document).ready(function() {

  var $clickMe = $('.click-icon'),
      $card = $('.card');

  $card.on('click', function() {
    $(this).toggleClass('is-opened');
    $clickMe.toggleClass('is-hidden');
  });

});

let fruits = ["Поздравление 1", "Поздравление 2", "Поздравление 3"];
var fruit = fruits[Math.floor(Math.random() * fruits.length)];

document.getElementById('celeb').innerHTML = fruit;
