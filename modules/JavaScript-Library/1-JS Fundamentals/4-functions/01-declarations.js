/*General Ideas: at their broadest level, functions do the following:
1 - they take some input which the function will handle/process.
2 - they process the input given to them
3 - they usually, but not always, return some value
4 - they can be invoked (used) as many times as we want, cutting down on code repetition
*/

//EXAMPLE 1
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));    //8
console.log(newFunc(10));   //11
console.log(newFunc(11));   //12
console.log(newFunc(-2));   //-1

//EXAMPLE 2
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}
console.log(sentence("Jonathan", "Huer"));      //My first name is Jonathan and my last name is Huer
console.log(sentence("Tyler", "Shelton"));      //My first name is Tyler and my last name is Shelton
let superImportantSentence = sentence("Nicky", "Disborough");
console.log(superImportantSentence);            //My first name is Nicky and my last name is Disborough


//let's build a function that takes a complex type--an array in this case, and console logs each item in the input array
let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);      //1, true, {key: 'string}, [0, false, null], heya!
iteratorFunc(arr2);     // 5 6 7 8 9 10