//Conditional Logic - with an expression

var kidHeight = 52;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride"
//if the kid is over 48 inches in height

if(kidHeight > minHeight) {
//code performed if condition is true
    console.log("You can ride the coaster!");
}
if(kidHeight <= minHeight){
    console.log("Sorry kid, You've got some growing to do first!")
}