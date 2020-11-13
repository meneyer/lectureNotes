/* 
CHALLENGE 1
Who's name is longer?

BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.

SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
 */


let Name = "meganNeyer"
let x = Name.length;
console.log(x)

let frndName = "melissaFronckowiak"
let y = frndName.length;
console.log(y)

let z = y-x;
console.log(z)

console.log(y>x)


//INSTRUCTOR ANSWER
//BRONZE
const myName = "meganNeyer";
const friendName = "melissaFronckowiak";

console.log(myName.length);
console.log(friendName.length);

//SILVER
let sentence;

// if (myName.length>friendName.length){
//     sentence = "My name is longer than "+friendName;
//     console.log(sentence);
// } else {
//     sentence =  `${friendName}'s name is longer than my name`     //"My friend's name is longer than "+ "my name";
//     console.log(sentence)
// }                                       //the interpolation can be written either way

//GOLD
if (myName.length>friendName.length){
    sentence = "My name is longer than "+friendName;
    console.log(sentence);
} else if(myName.length == friendName.length){
    const differenceInLetters = friendName.length - myName.length;
    sentence =  `${friendName}'s name is equal to ${myName} by ${differenceInLetters} letters`     
    console.log(sentence);
} else {
    const differenceInLetters = friendName.length - myName.length;
    sentence =  `${friendName}'s name is longer than ${myName} by ${differenceInLetters} letters`     
    console.log(sentence);
}     

//If you get a negative number, like if My name was before Mel's, you can add a + in front of the the {differenceInLetters} to make it {+differenceInLetters} to display the number as a positive number instead of a negative number.