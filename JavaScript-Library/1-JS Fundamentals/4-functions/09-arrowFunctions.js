/*
ARROW FUNCTIONS
*/

//normal function declaration - 
function coffee(){
    return 'coffee is good';
}

//normal function expression
let tea = function(){                   //this is an anonymous function
    return 'tea is healthy';
}

console.log(coffee());      //coffee is good
console.log(tea());         //tea is healthy

//arrow functions are *always* anonymous
//arrow function expression
//arrow functions cannot be hoisted

//EXAMPLE 1
let hotChocolate = () => {          // () => takes the place of function() in an arrow function
    return 'hot choolate is king';
}

console.log(hotChocolate());        //hot chocolate is king


//EXAMPLE 2
let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3, 2));     //I have 3 cat(s) and 2 dog(s)
console.log(animals(0,0));     //I have 0 cat(s) and 0 dog(s)

//concise vs. block body

//concise body
let apples=x => `There are ${x} apples`
console.log(apples(10))     //There are 10 apples.

//block body  --- needs curly braces & the word return
let bananas = x => {            //x can also be in (x) if you want to.  Code works both ways
    return `There are ${x} bananas`;
}
console.log(bananas(5));    //There are 5 bananas
//return must be explicitly written in a block-body arrow function

let func = () => 'hi';
console.log(func());        //hi

let secondFunc = ()
=>
'hi';
console.log(secondFunc);        //ERROR.  Arrow must follow directly after the paranthesis (same line).  The "hi" can be separate if you want, but that's just silly.