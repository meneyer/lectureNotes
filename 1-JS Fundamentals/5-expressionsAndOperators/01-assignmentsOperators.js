/*
ASSIGNMENT OPERATORS

5-expressionsAndOperators
  01-assignmentOperators.js
*/

//Assignment operator
let x= 20;

//addition assignment operator
x += 1;  //x = x + 1
console.log(x);   //Result = 21

//subtraction assignment operator
x -= 1;  //x = x - 1
console.log(x);    //Result = 20

//mulitplication assignment operator
x *= 2; //x = x * 2
console.log(x);    //Result = 40

//division assignment operator
x /= 4;   //x = x / 4
console.log(x)    //Result = 10

//reaminder (modulus) assignment operator
x %=2   //x = x % 2 
console.log(x);    ///Result = 0  -->at this point, x was 10, so 10/2 goes in evenly 5 times, so the remainder is 0.

//modulus operator
console.log(5%3);  //Result = 2   --> How?  5/3 = 1 2/3 -- Modulus just gives us the remainder of 2.
console.log(25%7);  //Result = 4  --> How? 25/7 = 3 4/7 -- Modulus just gives us the remainder of 4.

//exponential assignment operator
x **=2;  // x to the power of 2
console.log(x);  //Result = 0   ---> X is 0 at this point, so 0 to the power of 2 is still 0

let y=7;
y**=3;
console.log(y);   //Result is 343  (7 to the power of 3 ----> or 7*7*7)

