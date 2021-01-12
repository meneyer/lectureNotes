/*
FUCTIONS:

-JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression

-Function declarations are hoisted in our code, and run ONLY when we call them (invoke them).  So any function in our code sits and waits to be ran until we call it by name.  Think of it as a student with his or her hand up, waiting to ask a question.  That student does not ask the question until the teacher calls upon them.

-Function expressions are not hoisted, and are generally stored in variables.

-Functions without names are known as anonymous functions
*/

//Function declaration

function sayHello(){
    console.log("Hi");
}

sayHello()          //Hi - the function has been called here

//Function Expression

let greetings = function (){
    console.log("Hello");
}

greetings()

/*
Parameters

-Think of parameters as a newly declared variable that we have not given a value to yet.
    -The value that we pass into our function when we call the function to run(which is known as an argument), is the value that gets assigned to the parameter

    -General naming convention for function parameters: the parameter should be named something related to the information we are passing into the function.  If we're passing in an integer, we may name our parameter num or number.
*/

function myDog(husky){
    console.log(`My dog's name is${husky}`);
}

myDog("Princess");      //My dog's name is Princess, if a second dog name was added, only Princess would show as there is only value in the parameter.  In this example: "Princess" is the argument, "Husky" is the parameter
myDog("Luna");          //My dog's name is Luna

function allMyDogs (smallHusky, bigHusky, borderCollie){
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`);
}

allMyDogs("Mira", "Luna", "Charlie");  //My dogs are named Mira, Luna, and Charlie.

//The order of the items are important.  If you don't have a second variable (like bigHusky) but input 2 data points in there, Charlie would be shown as "big Husky" and borderCollie would be undefined.  IF you are missing a variable - you would need to put that in the 3rd spot in the parameters so if there isn't something, it doesn't mess the rest of the answers up.

/*
Return

-functions can also manipulate the data sent to them, and return a new value
-code (ex: conosle.logs) below the return does not get executed if it is not a part of the return - return ends the function.
*/

function calculator(one, two, three){
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight/3);
    return average;         
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*
ARROW FUNCTIONS

-Arrow functions (or fat arrow functions) were introduced in ES6.  They are basically just a more consice way to write fucntion expressions - NOT declarations
    -This means that arrow functions do NOT get hoisted.

-There are two types of arrow functions: concise body and block body
    -The return happens automatically with a concise body arrow function
    -The return does NOT happen automatically with a block body arrow function.
*/

//CONCISE BODY ARROW FUNCTION -- DOES NOT USE {} -- DOES NOT REQUIRE "RETURN" KEYWORD
let speak = (name) => console.log(`${name} goes wooooooof`);
speak("Luna");              //Luna goes wooooooof

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner("Donovan", "Triplett");
console.log(fullName);          //Return happens automatically in concise body arrow function - answer Donovan Triplett

//BLOCK BODY ARROW FUNCTION -- USES {} -- REQUIRES "RETURN" KEYWORD
let dog = (name) => {
    return name;
}

let name = dog("Luna");
console.log(`${name} goes wooooof`)

let nameJoiner = (first, last) => {
    return `${first} ${last}`;
}
let fullName = nameJoiner("Donovan", "Triplett");
console.log(fullName);

// PRACTICE I
// Write a function that takes two parameters  (Length and Width) that returns the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function areaCalculator(length, width){
    let area = length*width;
    return area;
}

let area1 = areaCalculator (5, 2);
let area2 = areaCalculator (10, 2);
   
console.log(area1);
console.log(area2);

//PRACTICE 2
//Write a function that will convert dog years to human years
//Formula for conversion - Human Age = {Dog Age -2} x 4 + 21

function dogYearsToHumanYearsCalculator (dogAge){
    let dogAgeConversion = (dogAge-2)*4+21;
    return dogAgeConversion;
}

console.log(dogYearsToHumanYearsCalculator (7));
console.log(dogYearsToHumanYearsCalculator (11));
