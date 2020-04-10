//Business Logic
function Pizza(pizzaSize, pizzaToppings, pizzaType) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaType = pizzaType;
  this.pizzaCost = 10
}
//Function will adjust cost based on user input
Pizza.prototype.costAdjust = function() {
  var cost = 10;
  if (this.pizzaSize === "large") {
    cost += 8;
  } else if (this.pizzaSize === "medium") {
    cost += 4;
  } //this.pizzaSize === "small" pizzaCost will be standard value

  if (this.pizzaType === "type") {
    cost += 8;
  }
  
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    var topping = this.pizzaToppings[i];
  if (topping === "veggie") {
    cost += 1;
    console.log(this, cost);
  } 
  if (topping === "meat") {
    cost += 2;
  }
  if (topping === "extra") {
    cost += 3;
  }
}
  this.pizzaCost = cost
   return cost;  
}

//UI Logic
$(document).ready(function() {
  $("form#pizza-selections").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:checkbox[name=size-selection]:checked").val();
    var pizzaToppings = [];
    $.each($("input[name=topping-selection]:checked"), function() {
      pizzaToppings.push($(this).val());
    });
    var pizzaType = $("input:checkbox[name=type-selection]:checked").val();

    var pizza = new Pizza(pizzaSize, pizzaToppings, pizzaType);
    pizza.costAdjust();
    $("#output").html("Your total is $" + pizza.pizzaCost)
    console.log(pizza);
  })
});