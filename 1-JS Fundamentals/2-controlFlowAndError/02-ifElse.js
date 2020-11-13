//IF ELSE

let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else {                            //Else gives you a second option if the first one comes up false
    console.log('no jacket necessary!')
}                                      //Result: No jacket necessary!

//you can blend complex conditionals and if-else statements based upon your need;
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing');
}  else{
    console.log('Either the temperature is cool, the variable is not a string, or both')
}       //Result: This weather is amazing.  *If let weather = '75' (string 75), the else answer would have come through as it wouldn't have been a number type


//ELSE IF

//If-elseif statements can be chained

let age = 20
if (age >= 25){
    console.log('yay, you can rent a car!');
} else if(age>= 21){
    console.log('Yay, you can drink!');
} else if(age >= 18){
    console.log('yay, you can vote!')
} else {
    console.log ('sorry, you are too young to do anything fun')
}           //Result: Yay, you can vote!  -->first 2 conditionals are false, but the 3rd is true, so that's the answer.