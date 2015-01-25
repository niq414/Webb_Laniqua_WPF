//Laniqua Webb January 21 2015 - Conditionals Assignment

//This is a calculator that will calculate the amount of calories and servings in a meal and determine if the user
//may have a small dessert.

var mealCalories = 1;
var servingSize = 1;
var appetizerCalories = 1;



//Definition of the variables that will be used to determine the users eligibility

var mealCalories = prompt("How many calories are in the meal?");
var servingSize = prompt("How many servings are in the meal?");
var appetizerCalories = prompt("How many calories are in the appetizer?");
var userAge = prompt("What is your age?");



var totalCalories = mealCalories * servingSize + parseInt(appetizerCalories);
console.log(totalCalories);

if(totalCalories < 700 && userAge >= 21) {
    console.log("You consumed " + totalCalories + " calories, You may have a slice of pie and a drink!");
    alert("You consumed " + totalCalories + " calories, You may have a slice of pie and a drink!")
}
if(totalCalories < 800 || userAge < 17){
    console.log("You consumed " + totalCalories + " calories, you may have a slice of pie!");
    alert("You consumed " + totalCalories + " calories, you may have a slice of pie!")
}else{
    console.log("You consumed " +totalCalories+ " calories, you may have an apple!");
   alert("You consumed " +totalCalories+ " calories, you may have an apple!")
}

/* I typed 200 for calories 2 for servings and 200 for appetizer and my calculator gave me 600 total calories. */