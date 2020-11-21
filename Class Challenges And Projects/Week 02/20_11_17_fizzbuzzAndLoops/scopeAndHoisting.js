/*
************
 HOISTING
************

    - hoisting was thought up as a general way of thinking about how our code is compiled and executed.
        - there are two general phases that happen when we run our code:
            - creation phase: any variable (var, let, const) and functions in our code are stored to memory.
            - execution phase: values are assigned to the variables and functions that were stored to memory during the create phase

            (what's on the left side of the = is what's stored to memory during the creation phase) ---> let hoisted = true <--- (the value, or the right side of the =, is what gets assigned during the execution phase - before finally then running our code.)
    
    - Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and stored away in memory.

    - when our code is read, the file is read top to bottom, line by line, in sequential order. 

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/

console.log(hello);
var hello = "hello";        //undefined

var hello = "hello"; 
console.log(hello);         //hello

goodbye();

function goodbye(){
    console.log("goodbye")
}                           //goodbye - Functions & Vars can get hoisted

console.log(name);
let name = "Rob";           //error.  Let & Const cannot be hoisted

let name = "Rob";  
console.log(name);          //Rob



/*
************
  SCOPE
************

    - scope is the hierarchy of variscoables in our code - also commonly referred to as global scope and local scope, or parent scope and child scope. 
        - local scopes have access to global scopes, but not vice versa.

        overall JS document ---> [

                                    let coffeeType = 'dark roast'; <--- parent scope, or global scope. Can be accessed in local scopes
                                    
                                    function exampleFunction() {
                                        let x = 'declared inside function'; <--- x can only be used in exampleFunction. x's scope is local 
                                                                                 to exampleFunction 
                                    }

                                    console.log(x); // error, cannot access x outside of it's scope

                                ]
    

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/


var coffeeType = "dark roast";

function exampleFunction(){
    console.log(coffeeType);
}                       //returns nothing as the function isn't called yet

exampleFunction()       //dark roast


var coffeeType = "dark roast";
function exampleFunction(){
    var coffeeType = "vanilla roast";
    console.log(coffeeType);
}                       

exampleFunction()               //vanilla roast

console.log(coffeeType);        //dark roast (outside the function)

//EXAMPLE
var x = "Rob"

function scope(){
    var x = "world";
    if (true == true){
        var x = "Hello"
        console.log(x);     //x is from "if statement" - this is the first Hello is the result; if var were set to let, the second word would have been world as the hello would not get hoisted out of the brackets
    }
    console.log (x)         //x is from function - this is the second Hello in the result
}
scope();

console.log(x);     //x is from outside the funtion.  Result: Hello, Hello, Rob



var x = "Rob"

function scope(){
    var x = "world";
    if (true == true){
        let x = "Hello"
        console.log(x);     //x is from "if statement" - this is the first Hello is the result; 
    }
    console.log (x)         //x is from function, the let cannot replace the var so world is the correct answer here
}
scope();

console.log(x);     //x is from outside the funtion.  Result: Hello, World, Rob