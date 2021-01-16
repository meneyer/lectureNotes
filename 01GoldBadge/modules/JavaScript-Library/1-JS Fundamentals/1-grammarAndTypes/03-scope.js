/*
SCOPE
JS has both LOCAL and GLOBAL scope

*/


//EXAMPLE 1  -- 2 Variables
var x=12;           //Global scope = the stuff to the furthest left.  Value Always available

function scope(){
  var x = 33;       //Local Scope = the stuff inside the indentations.  Value Only available inside that area.
  var y = 10;
  console.log(x);       
}
scope();                //33 -- this answer would be 12 as well if there is nothing inside of the function since 12 exists everywhere.
console.log(x);         //12  
console.log(y);         //undefined


//EXAMPLE 2  -- 1 variable
var x=12;           

function scope(){
  x = 33;       
  console.log(x);       
}
scope();                //33   
console.log(x);         //33 -- since there is only 1 var, x was reassigned in the function.  In example 1, there were 2 variables which is why that had 2 different answers.


//EXAMPLE 3 -- 3 Variables
var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x= 3;
        console.log(x);     //3
    }
    scopeInner();           
    console.log(x);         //2
}
scope();                
console.log(x);            //1


//EXAMPLE 4 -- (contrast with 5)
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x);     //45
    }
    console.log(x)          //33
}
scope();
console.log(x)              //12

//EXAMPLE 5 -- (contrast with 4)
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x);     //45
    }
    console.log(x)          //45 -- var doesn't obey "block" scope (block scope is everything inside the pink {}, function scope is everything inside the yellow{})
}
scope();
console.log(x)              //12