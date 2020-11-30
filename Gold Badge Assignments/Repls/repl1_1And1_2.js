/*
REPL 1.1
1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a function and accept the data from the for loop as a parameter(see step 2). 

2. Declare a function. Inside the function, console.log each number (0-10) from the previously written for loop. 

3. Inside of the function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'.
*/

function evenOrOdd(){
    for (let i=0; i<=10; i++){
        console.log(i)
        if (i%2==1){
        console.log("the number is odd")
        } else if (i%2==0){
        console.log ("the number is even")
        }
    }
}
evenOrOdd()

/*
REPL 1.2

Write an object literal that stores information about your favorite movie. 

nameOfMovie, runTime, characters, and genre should be keys directly inside the object. 

characters will be an array that should store no more than two (2) character objects, each of which stores name, age, and items. 

items itself will also be an array that should store no more than two (2) item objects. 

These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}). 

Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has.
*/

let favoriteMovie = {
    nameOfMovie: "Robin Hood Men In Tights",
    runTime: "104 minutes",
    characters: {
        character1: {
            name: "Robin Hood", 
            age: 24, 
            item: ["bow and arrow", "feathered hat"],
        },
        character2: {
            name: "Sheriff of Rottingham",
            age:26,
            item: ["horse", "dueling glove"]
        },
    },
    genre: "comedy"
}

console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.runTime);
console.log(favoriteMovie.characters);
console.log(favoriteMovie.characters.character2.name);
console.log(favoriteMovie.characters.character1.item[0]);
