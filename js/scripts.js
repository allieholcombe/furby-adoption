function Furby(name, age, color) {
  this.furbyName = name;
  this.age = age;
  this.furbyColor = color;
  this.adoptionStatus = false;
}
var furby1 = new Furby("Lola", 3, "gray, white");

$(document).ready(function() {
  $("form").submit(function(event) {
    var inputName = $("input#name").val();
    var inputAge = $("input#age").val();
    var inputColor = $("input#color").val();

    var newFurby = new Furby(inputName, inputAge, inputColor);

    $("span#furbyName").append(newFurby.furbyName, newFurby.age, newFurby.furbyColor, newFurby.adoptionStatus);
  });
});
