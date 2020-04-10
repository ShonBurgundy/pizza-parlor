//Business Logic
function Pizza(pizzaSize, pizzaToppings, pizzaType) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaType = pizzaType;
  this.pizzaCost = 10
}
//Function will adjust cost based on user input
Pizza.prototype.costAdjust = function() {
  if (this.pizzaSize === "large") {
    this.pizzaCost += 8;
  } else if (this.pizzaSize === "medium") {
    this.pizzaCost += 4;
  } //this.pizzaSize === "small" pizzaCost will be standard value

  if (this.pizzaType === "type") {
    this.pizzaCost += 8;
  } 
  if (this.pizzaToppings === "veggie") {
    this.pizzaCost += 1;
  } 
  if (this.pizzaToppings === "meat") {
    this.pizzaCost += 2;
  }
  if (this.pizzaToppings === "extra") {
    this.pizzaCost += 3;
  } 
  return this.pizzaCost;  
}

//UI Logic
$(document).ready(function() {
  $("form#pizza-selections").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:checkbox[name=size-selection]:checked").val();
    var pizzaToppings = $("input:checkbox[name=topping-selection]:checked").val();
    var pizzaType =$("input:checkbox[name=type-selection]:checked").val();

    var pizza = new Pizza(pizzaSize, pizzaToppings, pizzaType);
    pizza.costAdjust();
    $("#output").html("Your total is $" + pizza.pizzaCost)
    console.log(pizza);
  })
});