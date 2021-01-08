/*
ARRAYS

    -Arrays are used to store mutliple values in a single variable.  
        -there are array methods that allow us to traverse, as well as mutate, the data being held by an array.

    -Arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of arrays lenth -1.
*/

let arr = ["This the first element", "This is the second element", "This is the third element"];

console.log(arr[0]);
console.log(arr[arr.length - 1])        //gives you the last element in the array as there are 3 elements in the array, 3-1=2 which is the position of the last element

//This is the Array class constructor - this can be used to create arrays.
let test4 = new Array();            //creates an empty array
console.log(test4);   

let test2 = new Array(3);         //if there is only one number - the array will be created with that many empty items in that array.  
console.log(test2);              // [ <3 empty items> ]

let test3= new Array(1, 3, 6, 8);         //if there are mulitple numbers, that will be the array created.  
console.log(test3);              //[1, 3, 6, 8]

let test = new Array();  
test[2] = "did it work?"       
console.log(test);              //[<2 empty items>, "did it work?"] has been added as the third item in this array.


//forEach Method -- Exectues the supplied function for each element in the array.
//the forEach Method cannot return anything.

//all of these will give you the same answers
let boardGames = ["Monopoly","Clue", "Risk", "Candy Land", "Catan"];

for (let i = 0; i< boardGames.length; i++){
    console.log(boardGames [i]);            //Monopoly, Clue, Risk, Candy Land, Catan
}

//Block Body (Arrow Body Function)
boardGames.forEach(game => {
    console.log(game);                    //Monopoly, Clue, Risk, Candy Land, Catan
})

//Concise Body (Arrow Body Function)
boardGames.forEach(game => console.log(game));  //Monopoly, Clue, Risk, Candy Land, Catan

//Anonymous Function
boardGames.forEach(function (game){
    console.log(game);                      //Monopoly, Clue, Risk, Candy Land, Catan
})


//ARRAY METHODS
//To access a specific element in an array, use bracket notation along with its index value.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList[0]);           //celery

//Array.length - returns the number of elements in the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.length)        //5 (5 elements in the array)

//Array.push() -- adds element to the end of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.push("salt");
console.log(shoppingList);              //["celery", "limes", "lemons", "grenadine", "oranges", "salt"]

//Array.unshift() -- adds a new element at the beginning of the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.unshift("salt");
console.log(shoppingList);              //["salt", celery", "limes", "lemons", "grenadine", "oranges"] 

//Array.pop() -- removes the last element in the array and returns that element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let removedElement = shoppingList.pop()
console.log(shoppingList);              //["salt", celery", "limes", "lemons", "grenadine"] 
console.log(removedElement);            //oranges      

//Array.shift() - removes the first element in the array and returns that element
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let removedElement = shoppingList.shift();
console.log(shoppingList);              //["limes", "lemons", "grenadine", "oranges"];
console.log(removedElement);            //celery

//Array.map() - transforms the elements in the original array by calling the given function once for each element in the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.map(item => item.toUpperCase()));  //CELERY, LIMES, LEMONS, GRENADINE, ORANGES
let newShoppingList = (shoppingList.map(item => item.toUpperCase()));
console.log(newShoppingList)         //CELERY, LIMES, LEMONS, GRENADINE, ORANGES

//Array.filter() - creates a new array with only the elements that pass the test in a given function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
console.log(newShoppingList);           //limes, lemons

//Array.find() - returns the first element in the array that passes a test given as a function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let shoppingItem = shoppingList.find(item => item.startsWith("l"));
console.log(shoppingItem);              //limes

//Array.includes() - determines whether an array has a specific element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let isIncluded = shoppingList.includes("limes");
console.log(isIncluded);                //true

//Array.indexOf() - search the array for a specific element and returns its first index.  Returns -1 when element is not found.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.indexOf("lemons"));            //2 - aka the position of the lemons
console.log(shoppingList.indexOf("salt"));              //-1 as salt is not in the array

//Array.findIndex() - returns the index of the first element in the array that passes  the test in a given function.  Returns -1 when element is not found.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let foundIndex = shoppingList.findIndex(item => item.startsWith("g"));
console.log(foundIndex);                //3 - aka the position of the grenadine

//Array.every() - check if all elements in an array pass a test given as a function.  If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.every(item => item.length > 1));           //true as all of the strings are greater than one
console.log(shoppingList.every(item => item.length > 7));          //false as there some items that are not greater than 7

//Array.concat() - merge two or more arrays and returns a new array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let anotherShoppingList = ["salt", "mint leaves", "olives"];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);                //["celery", "limes", "lemons", "grenadine", "oranges", "salt", "mint leaves", "olives"]

//Array.slice() - selects a part of the array and returns a new array.  Selects the elements starting at the provided start argument and ends at, but does not include, the provided end argument.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newArray = shoppingList.slice(1, 4);
console.log(newArray);                  //limes, lemons, grenadine -- starts at 1 and ends at number 4 but does not include #4.

//Array.splice() - adds or removes elements in the array and returns the removed elements.  
    //First argument takes in an integer that specifies at what index to add/remove elements.  
    //Second argument takes in the number of items to be removed.  
    //Optional third argument that takes in the new elements to be added to the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.splice(2, 1, "salt");
console.log(shoppingList);      //["celery", "limes", "salt", "grenadine", "oranges"]

shoppingList.splice(2, 2, "salt");
console.log(shoppingList);      //["celery", "limes", "salt", "oranges"] - even though 2 items were removed, only 1 was added

shoppingList.splice(2, 2, "salt", "mint leaves");
console.log(shoppingList);      ///["celery", "limes", "salt", "mint leaves", "oranges"] - 2 items removed, 2 items added

//Array.sort() - Sorts the items in an array.  The sort order can either be alphabetic or numeric, and either ascending or descending.  By default, the sort method orders the values as strings in alphbetical or ascending order.  Can take in a a compare function which indicates if you want to sort by acenseding or descending.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.sort())            //['celery', 'grenadine', 'lemons', 'limes', 'oranges']

let costs = [3, 2, 13, 4];
console.log(costs.sort((a, b) => b -a));        //13, 4, 3, 2 -- sorts by decsending order
console.log(costs.sort((a, b) => a-b));         //2, 3, 4, 13 -- sorts by acsending order

//Array.reverse () - reverses the order of the elements in an array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.reverse());        //['oranges', 'grenadine', 'lemons', 'limes', 'celery']

//Array.toString() - converts the array into a string
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.toString());       //celery,limes,lemons,grenadine,oranges -- no [] around the array, just the words

//Array.join() - converts the elements in the array to a string.  Can accept an optional parameter, "separator", which indicates how the element will be separated.  Default separator is a comma
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.join("! and "));       //celery! and limes! and lemons! and grenadine! and oranges

//Lastly, an ES6 feature: the spread operator.
//The spread operator, indicated by these three dots "..." expands the contents of the array and takes it out of the array structure.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(...shoppingList);               //celery limes lemons grenadine oranges

let numArray = [20, 40, 60];
function sum(numOne, numTwo, numThree){
    return numOne + numTwo + numThree;
}
console.log(sum(...numArray));          //120 - before the 3 dots, the answer was "20, 40, 60, undefined, undefined" as it saw numOne as the [20, 40, 60] array and didn't have a definition for numTwo or numThree.  The spread operator took apart the array and made numOne have the 20 value, numTwo have 40, and numThree have 60 so we got the correct answer of 120.
