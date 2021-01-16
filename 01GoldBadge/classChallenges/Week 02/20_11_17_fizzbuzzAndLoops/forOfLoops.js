/*For Of Loops

-For of loops parse through an iterable list of numbers - so that makes them great for working with arrays

-Arrays contain what are knows as iterable properties.  Each property (or value) in an array, each contains its own index (starting at 0)

            value
let arr = ["chicken", "turkey", "duck"]
               0        1           2
             index numbers 

*/

//CHALLENGE

/* BRONZE

    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.

*/

/* SILVER

    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('

    - Use google to search for an array method that checks if an array includes a certain value

*/

/* GOLD

    - Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.

*/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

//BRONZE
/* MY TRY - it worked but not string interpolation
for (name of pies){
    console.log (name)
}
*/

for (name of pies){
    console.log(`${name} pie`);
}


//SILVER

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

for (name of pies){
    if(name.includes("apple")){
        console.log(`${name} pie is a fruit pie`)
    }else {
        console.log(`${name} pie is not a fruit pie`)
    }
}

//GOLD

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

for (name of pies){
    if(name.includes("apple") || name.includes("berry") || name.includes("peach") || name.includes("cherry")){
        console.log(`${name} pie is a fruit pie`)
    }else {
        console.log(`${name} pie is not a fruit pie`)
    }
}
