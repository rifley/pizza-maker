function Pizza(size, topping) {
  this.size= size;
  this.topping= topping;
  // this.cost= cost;
}

function Customer(name, pizzas) {
  this.name= name;
  this.pizzas= pizzas;
}

Pizza.prototype.findCost = function() {
  var sizeCost = parseInt(this.size);
  var toppingCost = parseInt(this.topping.length);
  var workingTotal = (sizeCost+(toppingCost*.5));
  if (workingTotal%1!==0 && workingTotal>=7) {
    // this.cost = workingTotal;
    return workingTotal + "0";
  } else {
    // this.cost = workingTotal;
    return workingTotal;
  }
}

//front end
toppings=[];
var total;
var customerOne;
var pizzaOne;

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // debugger;
    customerOne = new Customer(($("#customerName").val()),[]);
    var pizzaOne = new Pizza(($("#pizzaSize").val()),[],"");
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaToppings = $(this).val();
      toppings.push(pizzaToppings);
    });
    toppings.forEach(function(topping){
      pizzaOne.topping.push(topping);
    });
    customerOne.pizzas.push(pizzaOne);
    finalTotal = pizzaOne.findCost();
    $("#customerName").hide();
    $("#calculate").hide();
    $("#newPizza").show();
    $("#totalOut").show();
    $("#nameOut").text(customerOne.name);
    //adding pizza content to output
    // customerOne.pizzas.forEach(function(pizza){
    //   pizza.topping.forEach(function(toppings){
    //     $("#pizzaOut").append("<li>"+toppings+"</li>")
    //   });
    // });
    // $("#pizzaOut").append("<li>"+pizzaOne.topping[0]+"</li>");
    $("#totalCost").text(pizzaOne.findCost());
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
    //adding pizza content to output
    // $("#pizzaOut").empty();
    // customerOne.pizzas.forEach(function(pizza){
    //   pizza.topping.forEach(function(toppings){
    //     $("#pizzaOut").append("<li>"+toppings+"</li>")
    //   });
    // });
    //just about there

    //additional pizza cost
    // var newTotal;
    // for (var i = 0; i < customerOne.pizzas.length; i++) {
    //   newTotal = customerOne.pizzas[i].findCost();
    //   var newestTotal = newestTotal += newTotal;
    // };
    // console.log(newestTotal);
    total = newPizza.findCost();
    $("#totalCost").text(total);

  });
});
