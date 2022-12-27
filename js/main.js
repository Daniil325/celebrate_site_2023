$(document).ready(function() {

  var $clickMe = $('.click-icon'),
      $card = $('.card');

  $card.on('click', function() {
    $(this).toggleClass('is-opened');
    $clickMe.toggleClass('is-hidden');
  });

});

let fruits = ["Этот год будет ярким и незабываемым! А чудеса начнут случаться чаще, чем вы о них мечтаете! ",
              "Этот непредсказуемый год станет для вас началом чего-то нового и прекрасного!", 
              "Новый год станет для вас по-настоящему волшебным, он подарит снегопад приятных впечатлений и радостных моментов!"];
var fruit = fruits[Math.floor(Math.random() * fruits.length)];

document.getElementById('celeb').innerHTML = fruit;
