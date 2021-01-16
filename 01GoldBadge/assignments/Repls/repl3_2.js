/*
Create a guessing game where a user, when prompted, can input a number between 1 and 10. The user has up the three (3) opportunities to guess the correct number. Upon evaluation of the user's input, the computer can nudge the user to guess higher or lower.


What is needed for a guessing game?
A range for our user to guess between. This should be 1-10. 
A randomized computer answer.
A user guess that will provide a prompt 
A guess count (for loop variable declaration) 
gameLost = false
The user will have 3 guesses to guess the correct answer.

Logic 
A way to validate the user guess 
Check if the user guess === the computer answer and alert that they won 
If the user guess is greater than the computer answer - nudge them to guess lower 
If the user guess is lower than the computer answer - nudge them to guess higher 
Handle the case when a user loses

*** You will need to explore documentation on:
parseInt(), 
prompt, 
alert, 
Math.floor(), 
and Math.random()
*/



// function getRandomNumber(){
//     let computerAnswer = Math.floor(Math.random()*10+1);
//     console.log (computerAnswer);
//     for (let guessCount = 3; guessCount>=1; guessCount--){
//         let userGuess = prompt("Pick a Number between 1-10");
//         if (userGuess==computerAnswer){
//             alert ("correct!");  
//             break;      
//         } else if (guessCount >1 && userGuess>computerAnswer){
//             alert ("go lower" + (guessCount-1));      
//         } else if(guessCount >1 && userGuess<computerAnswer){
//             alert ("go higher" + (guessCount-1));        
//         } else {
//             alert ("you lose");
//         }
//     }
// }

// getRandomNumber()



function getRandomNumber(){
    let computerAnswer = Math.floor(Math.random()*10+1);
    let gameLost = false;
    console.log (computerAnswer);
    for (let guessCount = 3; guessCount>=1; guessCount--){
        let userGuess = prompt("Pick a Number between 1-10");
        if (userGuess==computerAnswer){
            alert ("correct!");  
            break;      
        } else if (guessCount >1 && userGuess>computerAnswer){
            alert ("go lower" + (guessCount-1));      
        } else if(guessCount >1 && userGuess<computerAnswer){
            alert ("go higher" + (guessCount-1));        
        } else {
            gameLost=true;
        }
    }
    if (gameLost){
        alert("you lose")
}
}
getRandomNumber()

// for (let i=0; i<=10; i++){
//     if (userGuess<computerAnswer){
//         // alert ("go higher");
//         // prompt("guess again");
//         console.log ("go higher");
//     }else if (userGuess>computerAnswer){
//         // alert ("go lower");
//         // prompt("guess again")
//         console.log ("go lower");
//     } else{
//         // alert ("correct!");
//         console.log("correct!")
//     }
// }






