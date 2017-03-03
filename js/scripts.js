function Pizza(size, topping) {
  this.size= size;
  this.topping= topping;
}

function Customer(name, pizzas) {
  this.name= name;
  this.pizzas= pizzas;
}

Pizza.prototype.cost = function() {
  var sizeCost = parseInt(this.size);
  var toppingCost = parseInt(this.topping.length);
  return (sizeCost+(toppingCost*.5)-1);
  }


toppings=[];
var total;
var customerOne={};
var pizzaOne={};
$(function(){







  // pushing user toppings to an array
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // debugger;
    customerOne = new Customer(($("#customerName").val()),[]);
    pizzaOne = new Pizza(($("#pizzaSize").val()),[]);
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaToppings = $(this).val();
      toppings.push(pizzaToppings);
    });
    toppings.forEach(function(topping){
      pizzaOne.topping.push(topping);
    });
    customerOne.pizzas.push(pizzaOne);
    finalTotal = pizzaOne.cost();

});
  $("#newPizza").click(function(event){
    event.preventDefault();
    var newToppings=[];
    var newPizza = new Pizza(($("#pizzaSize").val()),[]);
    console.log(newPizza);
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaTopping = $(this).val();
      newToppings.push(pizzaTopping);
    });
    console.log(newToppings);
    newToppings.forEach(function(topping){
      newPizza.topping.push(topping);
    });
    customerOne.pizzas.push(newPizza);
    console.log(customerOne);
  });
});


    // var size = $("input:checkbox[name=premTopping]:checked").val();
