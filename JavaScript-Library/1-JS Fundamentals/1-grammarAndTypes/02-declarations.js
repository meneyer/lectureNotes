//what is a variable?
var a = 1;
var b = 2;
console.log(a+b);

//notes on naming variables:
//a variable must begin with a letter, underscore or dollar sign
//numbers may FOLLOW the above characters, but cannot come first
//JavaScripts is case sensitive -- hello and Hello are different variables


/*
DECLARATIONS, INITALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable  
        var a = 1 ---> a is declared
Initializations refer to when a variable is assigned a value
        var a = 1 ---> 1 has been initialized (a now has a value of 1)
Assignment refer to giving a variable a value.  This can be after initialization.
        a can now be given a different value, say like 6., now var a = 6
*/

var x;
console.log('Declaration 1:', x);   //undefined

x=10;
console.log('Initialization 1:', x);   //10

x = 33;
console.log('Assignment 1:', x);     //33

var y;
console.log(y);   //undefined

y='hello';
console.log(y);   //hello

y='you are my friend';
console.log(y);  //you are my friend

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables
const = also 'new', declared unchangable variables
*/

let tonight = 'great';
const elevenFifty = 'Amazing';
console.log(tonight, elevenFifty);   //great amazing

tonight='lovely!';
console.log(tonight, elevenFifty);   //lovely! amazing

elevenFifty = "Super!"  //ERROR when running code -- does not work as elevenFifty is a constant and can't have its value changed.