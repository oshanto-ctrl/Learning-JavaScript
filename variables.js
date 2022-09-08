/*
Learning about different variables. 
Naming convention is camelCase.
*/

// let
console.log("Let:\n")
// valid 
let age = 17
let numOfCars = 200
let ratingOfMovie = 4.8
let movieName = "Shawshank Redemption"

let descriptionOfUser = "His age is "+ age +" He has "+ numOfCars +" cars.\n";



console.log("Age = ", age)
console.log("Number of cars ownes = ", numOfCars)
console.log("Rating of "+ movieName , "is #"+ ratingOfMovie)
console.log(descriptionOfUser)

// invalid
/*
when we use a reserved keyword to name a variable.

let let = 10; // ERROR
let document = "abcd"; // ERROR
*/


// const

/*
const keyword is for keeping a variable's value constant.
It's value can't be updated.
Can't be increminated, descriminated.
We can just perform operation and logical checks.
*/

// valid
console.log("\nConst:\n")
const maxServerRequest = 2000;
const pi = 3.14159; 
const minHeightForAirForce = 162.50 // centimeters
const minWaterLevel = 3 // 3 liters

console.log("This server can handle maximum "+ maxServerRequest +" user request.")
console.log("Value of PI is "+ pi)
console.log("Minimum height require to apply for air force this year is "+ minHeightForAirForce +" cm.")
console.log("Minimum water level in water purifier = "+ minWaterLevel +" liters.")


// invalid cases.

/*
maxServerRequest += 500

minHeightForAirForce -= 2

minWaterLevel += 1

we can't change the whole value.
Like:

const something = 3
something = 10

This will raise a TypeError.

we can rewrite 
const something = 10 and then we can change it's value.
*/











































