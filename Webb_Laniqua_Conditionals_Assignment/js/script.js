//Laniqua Webb January 21 2015 - Conditionals Assignment

//This is a calculator that will calculate the amount of calories and servings in a meal and determine if the user
//may have a small dessert.

//Definition of the variables that will be used to determine the users eligibility

var mealCalories = prompt("How many calories are in the meal?");
var servingSize = prompt("How many servings are in the meal?");
//The appetizer is only 1 serving
var appetizerCalories = prompt("How many calories are in the appetizer?");
//If the user is a child then they may have a slice of pie regardless of the calorie intake
var userAge = prompt("What is your age?");

var totalCalories = mealCalories * servingSize + appetizerCalories

if(totalCalories < 800 || userAge < 17){
    console.log("You may have a slice of pie!")
}else{
    console.log("You may have an apple!")
}

if(totalCalories < 800 && userAge <= 21){
    console.log("You may have a slice of pie and a drink!")
}