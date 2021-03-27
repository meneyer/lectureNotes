/*
ARRAY/OBJECT DESTRUCTURING

Destructuring allows you to unpack values from arrays, or event properties from objects, into distint variables.

Destructuring uses very similar syntax as array literals, but is instead on teh left hand side of the assignment operator, which is where we define what values to unpack from the sourced variable (array/object)

Great for pulling information out of an array/object and assigning that data to it's own variable.
*/

const fullName = ['Zach', 'Maynard'];

// const firstName = fullName[0];
// const lastName = fullName[1];
// console.log(firstName, lastName);  //Zach Maynard

const [firstName, lastName] = fullName;
console.log(firstName, lastName);  //Zach Maynard


/*
REST OPERATOR or REST SYNTAX

Rest syntax looks exactly like the spread syntax 
    In a way, rest syntax is the exact opposite of the spread syntax.  Spread syntax "expands" an arry into a list of standalong elements, while the rest syntax collects multiple elements and "condenses" them into a single element.

*/

const fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}];
const [firstName, lastName, ...otherInfo] = fullName

console.log(firstName);  //  Zach
console.log(lastName);  //  Maynard
console.log(otherInfo);  //  [ 'Mr', { month: 12, date: 18, year: 1992 } ]  //anything else added after the birthday object would also be in this element


//ADDING MORE ITEMS INTO THE ARRAY
const fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}, 'test one', 2, 'test three', 4, true, false];
const [firstName, lastName, ...otherInfo] = fullName

console.log(firstName);  //  Zach
console.log(lastName);  //  Maynard
console.log(otherInfo);  //  ['Mr', { month: 12, date: 18, year: 1992 },'test one', 2, 'test three', 4, true, false]


//SKIP SOME VALUES
const fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}, 'test one', 2, 'test three', 4, true, false];
const [firstName, lastName, ,  , ...testData] = fullName  //"Mr" & Birthday elements were skipped by adding a space and a comma for each item we skipped

console.log(firstName);  //  Zach
console.log(lastName);  //  Maynard
console.log(testData);  //  [ 'test one', 2, 'test three', 4, true, false ]

/*
Rest Operator MUST be the last element defined when using destructing.

const fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}, 'test one', 2, 'test three', 4, true, false];
const [firstName, lastName, ...info, , , , , , ] = fullName 

This will throw an error as the rest operator is not at the end.  You cannot skip the ending elements
*/




//OBJECT DESTRUCTURING

const user = {
    username: 'testuser',
    is_verified: true
};

const {username, is_verified} = user;
console.log(username)  //testuser
console.log(is_verified)  //true



const metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edi: '2014-04-14T08:43:37',
            url: 'de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung',
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, //we renamed the value of Scratchpad
    translations: [
        {
            title: localeTitle  //renamed
        }
    ]
} = metadata

console.log(englishTitle);  //Scratchpad
console.log(localeTitle);  //JavaScript-Umgebung


const people = [
    {
        name: 'Mike Smith', 
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samanta Smith',
        },
        age: 35
    },
    {
        name: 'Tom Jones', 
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones',
        },
        age: 25
    },
];

for (let { name: n, family : {father:f}} of people){
    console.log(`Name: ${n}, Father: ${f}`);
}   //Name: Mike Smith, Father: Harry Smith  Name: Tom Jones, Father: Richard Jones