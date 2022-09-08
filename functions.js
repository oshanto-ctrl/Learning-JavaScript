/*
Learn a thing or two about js functions.
*/

console.log("# Print 1 to n numbers.#\n")

function printToN(n){
    // do some looping
    console.log("Printing 1 to "+ n);
    for(let i = 1; i <= n; i++){
        console.log(i + " ");
    }
}

printToN(6) // calling the function.


console.log("\n\n# Print goodly formated name. #\n")

function neatlyFormattedName(firstName, lastName){
    goodName = firstName + " " + lastName;

    finalGoodName = ""

    finalGoodName += goodName.charAt(0).toUpperCase() + goodName.substr(1).toLowerCase() + " ";

    return finalGoodName.substr(0, finalGoodName.length - 1)

}

let name = neatlyFormattedName("rejoan", "siddiky") // calling the functions and storing the returned value
console.log("Formatted name = ", name) // printing the returned value.


console.log("\n\n# Add even #\n")

function isOddOrEven(n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}

n = 17

/*
if(isOddOrEven(n)){
    console.log("Number ", n , "is Even.");
}else{
    console.log("Number ", n , "is Odd.");
}
*/

isOddOrEven(n) ? console.log("Number ", n , "is Even.") :console.log("Number ", n , "is Odd.");


console.log("\n\n# Voter validation #\n");

function validateVoter(userAge){
    const minimumAgeToVote = 18; // constant variable minimumAgeToVote contains min age to eligible to vote.

    if(userAge < minimumAgeToVote){
        console.log("User is not eligible to vote.");
        reqWait = 18 - userAge
        console.log("Try again after " + reqWait + " Years later.")
    }else if(userAge >= minimumAgeToVote){
        console.log("Congratulations! You're eligible to vote.")
    }else{
        console.log("Invalid age! Check your input and try again.")
    }
}


// calling the validateVoter function.
let myAge = 25
let myFriendAge = 22
let myYoungerBrotherAge = 17
let corruptAge = "abc"

console.log(validateVoter(myAge))
console.log(validateVoter(myFriendAge))
console.log(validateVoter(myYoungerBrotherAge))
console.log(validateVoter(corruptAge))