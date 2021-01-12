/*
ARRAYS

Arrays have [] brackets
Can hold multiple datatypes 
Can list dataypes in an ordered, numbered way [0,1,2, etc.]
*/
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:      0       1           2      3    4   5       6
console.log(typeof students);           //typeof doesn't tell me my variable is an array, it tells me it's an object
console.log(students instanceof Array); //instance of tells me my array is an array
console.log(students[2]);       //Rhys
console.log(students[1]);       //Marshall
console.log(students[6]);       //['Ryan', 'Iesha']

let name = students[6];
console.log(name);              //['Ryan', 'Iesha']

let name = students[6][1];      //This gets postion 6 in the first array and position 1 in the second
console.log(name);              //Iesha

let name = students[6][1];
console.log(`Hello ${name}, you look nice today.`);     //Hello Iesha, you look nice today.

//recall for-of loop --> Gives the values of the array
let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];
for (f of food){
    console.log(f);
}                   //Pecan Pie, Shrimp, Quesadilla, Cheesecake, Hot Dog

let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];
for (f of food){
    console.log(f+' is amazing!');
}                    //Pecan Pie is amazing!, Shrimp is amazing!, Quesadilla is amazing!, Cheesecake is amazing!, Hot Dog is amazing!

//array methods -- built in JS functions
food.push("Pizza");     //Push adds something (pizza here) to the list of items in the original array
console.log(food);      //Pecan Pie, Shrimp, Quesadilla, Cheesecake, Hot Dog, Pizza
food.splice(1, 1, "Bananas");           //Splice removes an element from an Array and can put something else in it's place
//          (where the new item goes in the array, how many items come out of the array, the name of the new item)
console.log(food);       //Pecan Pie, Bananas, Quesadilla, Cheesecake, Hot Dog, Pizza
food.splice(2, 0, "Sweet Potato Pie");      //Insert an item into slot 2, don't remove anything, call it Sweet Potato Pie
console.log(food);       //Pecan Pie, Bananas, Sweet Potato Pie, Quesadilla, Cheesecake, Hot Dog, Pizza
food.pop();         //Pop removes the last item in an array
console.log(food);         //Pecan Pie, Bananas, Sweet Potato Pie, Quesadilla, Cheesecake, Hot Dog 

food = food.slice(2, 4);  //slice returns a section of the array.  The first number is the start position, the second number is the stop position (but the stop position is not included)  So in this case, that means we will get the 2nd and 3rd position of the array.
console.log (food);         //Sweet Potato Pie, Quesadilla
food = food.slice(2, 5);  
console.log (food);         //Sweet Potato Pie, Quesadilla, Cheesecake


//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers
let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

food.forEach((f) => console.log (f));     //Pecan Pie, Shrimp, Quesadilla, Cheesecake, Hot Dog

food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})                              //Pecan Pie 0, Shrimp 1, Quesadilla 2, Cheesecake 3, Hot Dog 4

food.forEach((food, index) => {         //This basically combines the 2 console logs above into one statement
    console.log(`The ${food} in our array is at position ${index}`);
})              //The Pecan Pie in our array is at position 0....The Hot Dog in our array is at position 4


let movies=['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];
movies.push('The Force Awakens');
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
movies.forEach(movie => console.log(movie));   //ForEach does everything listed above - array + push + splice for the final answer
console.log(movies.length);         //6 - the number of movies in the array - 6 items in the array

/*
Let's do the following with an array:
Check if we are working with an array
Flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
Using a Method only, let's print the values of the newly arranged array
*/

let arr = new Array(1, 2, 3, 4, 5);

if (arr instanceof Array){              //if true, code will run
    let revArr = arr.reverse();         //.reverse flips the values in the array
    revArr.forEach(numbers => console.log(numbers));  //the method prints out the new array
}                                //5, 4, 3, 2, 1 is a reverse of the original array 1, 2, 3, 4, 5