/*
COMPARISON OPERATORS

5-expressionsAndOperators.
  02-comparisonOperators.js
*/

//equality comparison operator
console.log('3' ==3);       //Result = true  --> even though the number is represented differently (sting and a number), the values are the same
console.log(4 == 4);        //Result = true
console.log(3 == '4');      //Result = false  --> two different types with two different values
// == is doing type coersion.  AKA, if the '3' is swapped to a number, it's still a 3 in line 9.  that does not hold true in line 11 as the '4' does not become a 3 if it swaps to a number

//stict equality comparison operator
console.log(3 === 3);      //Result = true as both the type and values are the same
console.log('3' === 3);     //Result = false as they are different types

//not equal comparison operator
console.log('3' !=4);       //Result is true as 3 is not equal to 4  (!= doesn't care about type, just value)
console.log('3' !=3);       //Result is false as 3 is equal to 3

//strict not equal comparison operator
console.log('3' !==3);      //Result is true (!== cares about both type and the value) as the string is not the same as the number with the same value
console.log(3 !==3);        //Result is false as the number is the same as the number with the same value

//greater than
console.log(3 > 2);     //Result true
console.log(2 > 3);     //Result false

//less than
console.log(2 < 3);     //Result true
console.log(3 < 2);     //Result false

//greater than or equal to
console.log(3 >= 2);    //Result True
console.log(3 >= 3);    //Result True  

//less than or equal to
console.log (2 <=3);        //Result True
console.log (3 <= 2);       //Result False

//And (both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0);   //Result True --> Yes && Yes -->Both are true, so And is True
console.log(2<1 && 3>0);    //Result False -->No && Yes  --> Only one is true, so And is False

//Or (either expression on one side of the operator must be true for "Or" to return true)
console.log(1<2 || 3<0);   //Result True --> Yes No -->One side is true, so Or is True
console.log(2<1 || 3<0);    //Result False ---> No No -->Both are false, so Or is false

//Examples of Complex Types (objects, arrays, functions) and equality expressions.  
//if the things are the same, it is true.  If they are differnt, it is false.
let obj = {key: 'test'};
console.log(obj == {key: 'test'});  //Result is false as the object itself is not the same (it is a mix of a word and a string with different values)

console.log(obj == obj);    //Result is true

let arr = [[1,2,3,4]];
console.log(arr = [1,2,3,4]);   //Result is false as we are talking about 2 different arrays, even though the content of the arrays is the same
console.log(arr == arr);        //Result is true

