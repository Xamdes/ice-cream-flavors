// var favoritesOne;
// var favoritesTwo;

$(function(){

  var favoriteFlavors = ["Mint", "Cookie-Dough", "Coconut", "Sweet Cream", "Matcha",  "Vanilla", "Chocolate"];

  favoriteFlavors.forEach(function(flavor){
    $("#flavor-list").append(wrapListTag(flavor));
  });


});


function wrapListTag(value)
{
  return ("<li>"+value+"</li>");
}
