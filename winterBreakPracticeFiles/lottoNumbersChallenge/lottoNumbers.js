// Lotto Number Challenge
// Bronze: Create a function that will return an array of 5 random numbers 1 through 49.
// ex: [5,2,23,15,45]

// Silver:: Sort the numbers in the array from smallest to largest.
// ex: [2,5,15,23,45]

// Gold: Make sure there is no duplicate random numbers in the array.
// Suggestion: change the random number generator to generate from 1-5 to validate no duplicaitons are created.

// Make sure you console.log() the array of lotto numbers

// let calc = Math.floor((Math.random()*100)+1);
// console.log(calc);

let getRandomNumber = function(start, end){
    let getRandom = Math.floor((Math.random()*end)+start);
    return getRandom;
}
console.log(getRandomNumber(1,49))