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
  var workingTotal = (sizeCost+(toppingCost*.5)-1);
  if (workingTotal%1!==0) {
    return workingTotal + "0";
  }else {
    return workingTotal;
  }
}

//front end
toppings=[];
var total;
var customerOne;

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // debugger;
    customerOne = new Customer(($("#customerName").val()),[]);
    var pizzaOne = new Pizza(($("#pizzaSize").val()),[]);
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaToppings = $(this).val();
      toppings.push(pizzaToppings);
    });
    toppings.forEach(function(topping){
      pizzaOne.topping.push(topping);
    });
    customerOne.pizzas.push(pizzaOne);
    finalTotal = pizzaOne.cost();
    $("#customerName").hide();
    $("#calculate").hide();
    $("#newPizza").show();
    $("#totalOut").show();
    $("#nameOut").text(customerOne.name);
    $("#pizzaOut").append("<li>"+pizzaOne.topping[0]+"</li>");
    $("#totalCost").text(pizzaOne.cost());
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
