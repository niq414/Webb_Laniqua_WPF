//Laniqua Webb January 14, 2015 Expression Worksheet



//Calculating how old Sparky the pit bull is in dog years

//Defining the variables
var humanYears = a = 1;
var dogYears = b = 7;

//Ask the user how old Sparky is in human years
var humanYear = prompt("What is Sparky\'s age in human years?");
console.log(humanYear);


//multiply humanYears and dogYears to determine the how many dog years Sparky is
var dogYear = humanYear * 7;

//Print out the number of years Sparky is
console.log("Sparky is " + dogYear);
alert ("Sparky is " + dogYear + " in dog years!");

//Sparky is 5 human years old which is 35 in dog years

//Calculate how many slices of pizza each person at the party will be able to get

//Define the variable
var pizzasOrdered = prompt("How many pizza\'s were ordered?");
var pizzaSlices = prompt("How many slices are given in each pizza?")
var partyPeople = prompt("How many people are at the party?")



//Create an expression that multiplies the number of pizzas and the number of slices divided by the amount of people at the party
var pizzaEaten = pizzaSlices * pizzasOrdered / partyPeople
console.log(pizzaEaten)
alert("Each person may have " + pizzaEaten + " slices of pizza");



//Calculate the average amount spent on groceries of the past five weeks

//List of weeks being calculated
var week1 = prompt("What was the amount spent on week 1?")
var week2 = prompt("What was the amount spent on week 2?")
var week3 = prompt("What was the amount spent on week 3?")
var week4 = prompt("What was the amount spent on week 4?")
var week5 = prompt("What was the amount spent on week 5?")

//Expression for the total amount spent of over 5 weeks
var groceryTotal = week1 + week2 + week3 + week4 + week5
console.log(groceryTotal)

//Expression for the total amount spent divided by 5 weeks
var groceryAverage = groceryTotal / 5;

console.log("You have spent a total of " + groceryTotal + " on groceries over the past 5 weeks. This is an average of " + groceryAverage + " per week.")
alert("You have spent a total of " + groceryTotal + " on groceries over the past 5 weeks. This is an average of " + groceryAverage + " per week.")

//Discount Calculations

var originalPrice = prompt("What is the original price of the item?")
var discountPercent = prompt("What is the discount percentage?")

var discountPrice = originalPrice * discountPercent
console.log(discountPrice)
