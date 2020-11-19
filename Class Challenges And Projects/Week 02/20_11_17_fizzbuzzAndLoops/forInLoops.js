/*
************
 FOR IN LOOPS
************
    - For In Loops count the enumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just means countable. So although properties in an object don't contain an index like arrays, their properties can be simply counted. 

    - a key - so think a key in an object - goes IN to a lock for it to correctly work and unlock. So for in loops are best used with objects, and that means for of loops are best used with arrays
*/


/* EXAMPLES
let obj = {
    key1: 'value', // 1
    key2: 'value', // 2
    key3: 'value'  // 3
}

console.log(Object.keys(obj).length);

for(key of obj){
    console.log(key) // error: object is not iterable
}
*/


//CHALLENGE//
/* BRONZE

    - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.

*/

/* SILVER

    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.

*/

/* GOLD

    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.

*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

/* for(members in fellowshipOfTheRing){
    console.log(`${members}`);          //this gave me members, purpose, formed, dissolved
}

console.log(Object.keys(fellowshipOfTheRing));//this gave me members, purpose, formed, dissolved 
*/

// console.log(fellowshipOfTheRing.members.Boromir)

for (members in fellowshipOfTheRing){
    console.log(members);
    console.log(fellowshipOfTheRing.members);     
}

// for (members in fellowshipOfTheRing.members.hasOwnProperty(key)){
//     var obj = fellowshipOfTheRing.members[key];
//     console.log(members);


for (members in fellowshipOfTheRing.members){
    if(members.startsWith("A") || members.startsWith("E") || members.startsWith ("I") || members.startsWith("O") || members.startsWith("U")){
        console.log(`${members}'s name begins with a vowel`)
    }else {
        console.log(`${members}'s name does not begin with a vowel`)
    }
}