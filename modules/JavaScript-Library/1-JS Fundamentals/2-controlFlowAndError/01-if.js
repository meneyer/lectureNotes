/*
IF CONDITIONALS
*/

let isOn = true;

if (isOn == true){
    console.log('The Light is On!')
}

if(isOn){
    console.log('The Light is on, yay!');
}

let weather = 65;

if(weather < 70){
    console.log("wear a jacket!");
}                                           //Result: "wear a jacket!"

let weather = 75;

if(weather < 70){
    console.log("wear a jacket!");
}                                           //No Result as the weather is higher than 70

let string = 'Tyler';
if (string==='Tyler' || false){
    console.log('if statements and conditionals are powerful!')
}                                           //Result: If statements and conditionals are powerful! because the Or comparison operator only cares about one of the variables, which Tyler is true.
