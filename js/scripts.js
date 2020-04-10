//Business Logic
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCost = 10
}
//Function will adjust cost based on user input
Pizza.prototype.costAdjust = function() {
  if (this.pizzaSize === "large") {
    this.pizzaCost += 8;
  } else if (this.pizzaSize === "medium") {
    this.pizzaCost += 4;
  } //this.pizzaSize === "small" pizzaCost will be standard value

  if (this.pizzaToppings === "type") {
    this.pizzaCost += 8;
  } else if (this.pizzaToppings === "veggie") {
    this.pizzaCost += 1;
  } else if (this.pizzaToppings === "meat") {
    this.pizzaCost += 2;
  } else if (this.pizzaToppings === "extra") {
    this.pizzaCost += 3;
  }
  return this.pizzaCost;  
}