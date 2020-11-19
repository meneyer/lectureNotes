/*
SWITCH STATEMENTS
*/

let frnd;

switch(frnd){
    case 'Tom':
        console.log('Hey Tom, when will bring sourdough bread for me?');
        break;                          //the break will stop the code from running when the condition is met for that case
    case 'Ken':
        console.log('Hey Ken, do you own a wolf in your backyard?');
        break;
    case "Alex":
        console.log('Hey Alex, how many magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${frnd}, but do I know you?`);  
    }                               //result is "I'm sorry, undefined, but do I know you?" as friend did not meet one of the case requirements


// Example Two
let friend = 'Tom';

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will bring sourdough bread for me?');
        break;                          
    case 'Ken':
        console.log('Hey Ken, do you own a wolf in your backyard?');
        break;
    case "Alex":
        console.log('Hey Alex, how many magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);  
    }                               //result is "Hey Tom, when will you bring sourdough bread for me?" since friend is defined"

//Example Three

let yep = true;

switch (typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log("yep is not a string or a boolean")
}


