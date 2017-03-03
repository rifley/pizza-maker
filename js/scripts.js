function Pizza(size, toppings) {
  this.size= size;
  this.toppings= toppings;
}

function Customer(firstName, lastName, pizzas) {
  this.first = firstName;
  this.last = lastName;
  this.pizzas= pizzas;
}

toppings=[];

$(function(){



  $("#formTwo").submit(function(event) {
    event.preventDefault();
    var size = $("input:checkbox[name=premTopping]:checked").val();
    console.log(size);
  })






  // pushing user toppings to an array
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaToppings = $(this).val();
      toppings.push(pizzaToppings);
    });
  });
});
