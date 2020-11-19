//HOISTING

//EXAMPLE 1
console.log(scissors);
var scissors="blue";            //undefined

//EXAMPLE 1 BREAKDOWN
var scissors;                   //variable on the bottom (line 5) is hoisted to the top of the chain
console.log(scissors);
scissors = "blue"               //undefined


//EXAMPLE 2
function hoistTest(){
    console.log(testVar);       //undefined
    var testVar = 10;
    console.log(testVar)        //10
}

hoistTest();

//EXAMPLE 2 BREAKDOWN
function hoistTest(){
    var testVar;
    console.log(testVar);       //undefined
    testVar = 10;
    console.log(testVar);       //10
}

hoistTest();