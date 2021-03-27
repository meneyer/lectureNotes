//DESTRUCTURING

const array = ['thing', 42, false, {key:'value'}, [1,2,3,4,undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length-1];

console.log(stringVar, numVar, objVar, nanVar);  //  thing 42 { key: 'value' } NaN

let [string, num, , obj, , nan] = array;  //the double commas skip over the array value you don't care about
console.log(string, num, obj, nan);  //  thing 42 { key: 'value' } NaN

//SPREAD OPERATOR

let newArr = ['a', 1, undefined, ...array];
console.log(newArr)  
/*
[
    'a',
    1,
    undefined,
    'thing',
    42,
    false,
    { key: 'value' },
    [ 1, 2, 3, 4, undefined ],
    NaN
]
*/


const testObj = {
    testString: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArr: [1, 2, 3, 4, undefined],
    testNan: NaN
}

const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.testNan;
console.log(objString, objNum, objObj, objNan);  // stringy thingy 23 { key: 'waluigi' } NaN

let {testString, testNum, testObject, testNan} = testObj;
console.log(testString, testNum, testObject, testNan);  // stringy thingy 23 { key: 'waluigi' } NaN

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj); 
/*{
    newString: 'more strings',
    anotherString: 'this is a string',
    testString: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: { key: 'waluigi' },
    testArr: [ 1, 2, 3, 4, undefined ],
    testNan: NaN
}
*/