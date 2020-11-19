/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY

    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif
*/

let FB=150
// if (FB%3==0){
//     console.log("fizz")
// } else if(FB%5==0){
//     console.log("Buzz")
// } else if(FB%3==0 && FB%5==0){
//     console.log("Fizz Buzz")
// }                                    //This ends at the first Fizz, so we need to flip the order around so we get the right answer


if(FB%3==0 && FB%5==0){
    console.log("Fizz Buzz")
} else if (FB%3==0){
    console.log("Fizz")
} else if (FB%5==0){
    console.log("Buzz")
}

let isDivisibleBy5And3=FB%3==0 && FB%5==0
let isDivisibleby3 = FB%3==0
let isDivisibleby5 = FB%5==0

console.log(isDivisibleBy5And3)     //true
console.log(FB)                     //150
switch(true){                       //if the statement is TRUE, we want to see Fizz Buzz
    case FB%3==0 && FB%5==0:        //this could also be written as FB%15==0 as the first number both 3 and 5 can be divisible by is 15
        console.log("Fizz Buzz");
        break;
    case FB%3==0:
        console.log("Fizz");
        break;
    case FB%5==0:
        console.log("Buzz");
        break;
    default:
        console.log("this is not the right answer");
}                                   //Fizz Buzz

(FB%3==0 && FB%5==0) == isDivisibleBy5And3 ? console.log("Fizz Buzz"):
FB%3==0 == 150? console.log("Fizz"):
FB%5==0 == 150 ? console.log("Buzz"):
console.log("this is the wrong answer")