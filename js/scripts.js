$(document).ready(function() {

    var flavors = ["vanilla", "pistachio", "chocolate", "mint", "cookie dough"];
    flavors.forEach(function(flavor) {
      $(".list").append('<li>' + flavor + '</li>');
    });


    var elements = ["p","h1","ul"];
    elements.forEach(function(element) {
      $(element).click(function() {
        alert("This is a " + element + " tag.");
      });
    });

    var movies = ["ET", "Star Wars", "chocolat", "The Fugitive", "Toy Story"];
    for (var index = 0; index < movies.length; index += 1) {
      $(".film").append('<li>' + movies[index] + '</li>');
    }

    for (var index = 99; index > 0; index -= 1) {
      var bier = index;
      $(".beer").append('<li>' + bier + ' bottles of beer on the wall</li>');
    }

});
