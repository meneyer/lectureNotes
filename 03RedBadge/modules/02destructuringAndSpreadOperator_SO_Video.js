/*
SPREAD OPERATOR

The spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements.
denoted by ... (3 dots)
*/

const fullName = ['Zach', 'Maynard'];
//...fullName // "Zach", "Maynard"

const copiedFullName = [...fullName];
console.log(copiedFullName)  //[ 'Zach', 'Maynard' ]

//const copiedFullName = [fullName];
//console.log(copiedFullName)  //[ ['Zach', 'Maynard'] ] <--without the spread operator, it's an array inside of an array

fullName.push("Mr.");
console.log(fullName, copiedFullName)  //[ 'Zach', 'Maynard', 'Mr.' ] [ 'Zach', 'Maynard' ] <---Mr. is not on copiedFullName as the push comes after the copiedFullName was created.  If it were before that creation (on line 10, for instance), it would be in the copiedFullName console log on this line.  **REMEBER CODE IS READ TOP TO BOTTOM**


// SPREAD OPERATOR & NUMBERS

console.log(Math.min(1, 5, -3)) //Math.min returns the smallest number provided, in this case -3

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)) // returns NaN (Not a Number) as prices is the array of all the prices, not just one number
console.log(Math.min(...prices));  //3.99 -- the spread operator pulls out the prices and gives us the smallest number


// SPREAD OPERATOR & OBJECTS

const persons = [{name: "Zach", age: 27}, {name: "Donovan", age: 24}];
const copiedPersons = [...persons];
console.log(copiedPersons);  //[ { name: 'Zach', age: 27 }, { name: 'Donovan', age: 24 } ]

persons.push({name: "Anna", age: 30});
console.log(persons, copiedPersons); 
/*
[
    { name: 'Zach', age: 27 },
    { name: 'Donovan', age: 24 },
    { name: 'Anna', age: 30 }
    ]
    [ { name: 'Zach', age: 27 }, { name: 'Donovan', age: 24 }   <--once again, Anna was pushed after copiedPersons was made, so she isn't in here
]
*/

persons[0].name = 'Zachary';
console.log(persons, copiedPersons);   // [{ name: 'Zachary', age: 27 }, { name: 'Donovan', age: 24 },{ name: 'Anna', age: 30 }]  [{ name: 'Zachary', age: 27 }, { name: 'Donovan', age: 24 } ]  <---in this example, Anna was not added, but Zach was changed to Zachary even though it also came after copiedPersons was made.

/*
JavaScript has 5 data types that are passed by value: boolean, null, undefined, string, number.  These are known as primitive data types.
    If a primitive data type is assigned to a variable, we can think of that variable as containing the primitive value

    let x = 10
    let y = 'abc'
    let z = null

    //x contains 10, y contains 'abc', z contains null -- all of these values are primitive data types

    VARIABLES   VALUE
    x           10
    y           'abc'
    z           null

    //when we assign the above variables to another variables using =, we copy the value to the new variable and they are copied by value

    let a = x;
    let b = y;

    VARIABLES           VALUE
    x                   10
    y                   'abc'
    z                   null
    a   (x, which is)   10
    b   (y, which is)    'abc'
*/
let x = 10
let y = "abc"
let z = null

let a = x
let b = y
console.log(x, y, z, a, b)  //10 abc null 10 abc

/*
JavaScript has 3 data types that are copied/passed by reference: array, function, & object.  These are all technically objects, we will refer to them collectively as objects.

Variables that are assigned a non-primitive data type are given a reference to that value.  The reference points to the object's location in memory -- the variables don't actually contain the value, just the reference to it.

Objects are created at a location on your computer's memory.  When we write arr = [], we've created an array in memory - what the variable arr recieves as the value is the address (or location) of that array in memory.

let arr = [];

    VARIABLES           VALUE           ADDRESS         OBJECTS
    arr                 <#001>          #001            []   

    arr.push(1)

    VARIABLES           VALUE           ADDRESS         OBJECTS
    arr                 <#001>          #001            [1]
    
    When a reference type value, or non primitive data type (array, function, object) is copied to another variable using =, the address of that value is what's actually copied over as if it were primitive.  Arrays, functions, and objects are copied by reference value (instead of a primitive value)

    let reference = [1];
    let refCopy = reference;

    VARIABLES           VALUE           ADDRESS         OBJECTS
    reference           <#002>          #002            [1]
    refCopy             <#002>          

    Each variable now contains a reference to the same array.  That means is we alter one of the variables, the other will see the same changes.


*/
let arr = []
console.log(arr)  //  []

arr.push(1)
console.log(arr) //[1]

let reference = [1];
let refCopy = reference;
console.log(reference, refCopy)  //[ 1 ] [ 1 ]

reference.push(2);
console.log(reference, refCopy)  // [ 1, 2 ] [ 1, 2 ]

///////////////////////////////////////////////////////

const persons = [{name: "Zach", age: 27}, {name: "Donovan", age: 24}];
const copiedPersons = [...persons];
console.log(copiedPersons); 

persons.push({name: "Anna", age: 30});
console.log(persons, copiedPersons);

//SPREAD OPERATOR & AVOIDING CHANGING BOTH THE ORIGINAL AND COPIED ARRAY

const persons = [{name: "Zach", age: 27}, {name: "Donovan", age: 24}];
//if we want to avoid changing both the original and copied array, we would need to copy every object as well.
const copiedPersons = persons.map(person => ({
    name: person.name, 
    age: person.age
})) //since we are returing something in curly braces {object}, we have to enclose it in paranthesis so JS doesn't think it is the function's body.

persons.push({name: "Anna", age: 30});
copiedPersons[0].name = "Zachary";

console.log(persons, copiedPersons);

/*
[
    { name: 'Zach', age: 27 },
    { name: 'Donovan', age: 24 },
    { name: 'Anna', age: 30 }
] [ { name: 'Zachary', age: 27 }, { name: 'Donovan', age: 24 } ]
*/
