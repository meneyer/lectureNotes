let myString = "this is a string";  //you can use 'single' or "double quotes"
let myNumber = 10;
let myBoolean =  true; //no quotes, that makes it a string
let myArray = [10, "sting", ["additional arrays", "can go here", 17]];
//let myObject = {firstKey: "a string"};  //key: value
let myUndefined;  //never set a value, so the answer is undefined let myUndefined=underfiend would do the same thing
let myNull = null;

console.log (typeof myBoolean)     //Result = boolean


/*
CHALLENGE 2
Types Challenge


BRONZE


Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.


--------------------------------------------------------------------------

SILVER


Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/


let owner = {name: "Megs ", last: "Neyer"}
console.log(owner.name)

let Heidi = {
    animal: "brown and black dog",  
    age: 7,  
    isSnoring: true, 
    owner: {name: "Megs ", last: "Neyer"},
}
console.log(typeof Heidi.animal)

//play with this to see if you can get silver
if (value === "string") {
    console.log(`The value is a ${value}`)     //or "the value is a string"
}else if (value === "number"){
    console.log("The value is a number")
}else if (value === "boolean"){
    console.log("The values is a boolean")
}else if (value === "object"){
    console.log("The value is an object")
}else{
    console.log("What are you?")

}




//INSTRUCTOR ANSWER//

//BRONZE
let myObject = {
    sting: "String",
    number: 15,
    boolean: true,
    object: {}
}
console.log(typeof myObject.number)

//SILVER
let value = typeof myObject.boolean;

if (value === "string") {
    console.log(`The value is a ${value}`)     //or "the value is a string"
}else if (value === "number"){
    console.log("The value is a number")
}else if (value === "boolean"){
    console.log("The values is a boolean")
}else if (value === "object"){
    console.log("The value is an object")
}else{
    console.log("What are you?")

}