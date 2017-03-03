function Pizza(size, topping) {
  this.size= size;
  this.topping= topping;
}

function Customer(name, pizzas) {
  this.name= name;
  this.pizzas= pizzas;
}

Pizza.prototype.cost = function() {
  this.size = parseInt(this.size);
  this.topping = parseInt(this.topping.length);
  return (this.size+(this.topping*.5)-1);
  }


toppings=[];
var customer;
var newPizza;
var total;
$(function(){







  // pushing user toppings to an array
  $("#formOne").submit(function(event) {
    event.preventDefault();
    debugger;
    customer = new Customer(($("#customerName").val()),[]);
    pizza = new Pizza(($("#pizzaSize").val()),[]);
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaToppings = $(this).val();
      toppings.push(pizzaToppings);
    });
    toppings.forEach(function(topping){
      pizza.topping.push(topping);
    });
    finalTotal = pizza.cost();
    console.log(finalTotal);
});
});


    // var size = $("input:checkbox[name=premTopping]:checked").val();
