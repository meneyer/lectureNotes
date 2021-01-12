//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}

function addAnyTwoNumbers(x, y){
    console.log(x + y);
    }

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers (7, 8);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
subtractTwoNumbers(5, 7);

function getMyBattingAverage (atBats, numberOfHits){
    let myAverage = numberOfHits / atBats ;
    return myAverage
}
console.log(getMyBattingAverage (250, 91));

function sumOfTwoNumbers (firstNum, secondNum){
    let answer = firstNum + secondNum ;
    return answer
}
console.log(sumOfTwoNumbers (60, 39));

function add(x, y){
    let sum = x + y;
    return x + y;
}
console.log(add(1,1));

function fullName (firstName, lastName){
    let name = firstName + " " + lastName ;
    return name
}
console.log(fullName ("Bob", "Jones"));

function dogName (first, nickname){
    let name = first + " " + nickname ;
    return name
  }
  console.log(dogName ("Heidi", "Bear"));

function fullName (first, last){
    let wholename = first + " " + last;
    return first + " " + last
}
console.log(fullName("Paul", "O'Connor"));

function calculatePriceIndiana (quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice
}
console.log(calculatePriceIndiana (17, 5));

function greet (name){
    return "Hello" + name
}
var myName = "Jack";
result= greet(myName)
console.log(result);


function answer(){
    console.log("'Hello, World!'");
}
answer();