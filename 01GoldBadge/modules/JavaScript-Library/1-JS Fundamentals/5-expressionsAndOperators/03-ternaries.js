/*
TERNARIES
*/

let x = 6;

x > 0 ? console.log('x is positive') : console.log ('x is negative');   //Result x is positive
 //question mark divides the conditioal from the code we want to run if that conditional is true.   

//Example Two

let y = -6;

y > 0 ? console.log('y is positive') : console.log ('y is negative');   //Result y is negative

//this looks the same as an if/else statement but is cleaner
if (x > 0){
    console.log ('x is positive');
} else {
    console.log ('x is negative')
}       //result x is positive

//EXAMPLE THREE -- if else is 7 lines, ternary is 3 lines
let greeting = "Salutations!";
if (greeting.length > 10){
    console.log('that is a long greeting!');    
} else if (greeting.length == 10){
    console.log('your greeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting');
}                                           //that is a long greeting!

//Example three as a ternary
greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('your greeting is exaclty 10 characters!') :
console.log('what a normal greeting');      //that is a long greeting!