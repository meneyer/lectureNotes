// function biggerNumber(x,y){
//     let largerNumber = (x>y);
//     return largerNumber;
// }

// let tryOne = biggerNumber (13, 4);
// console.log(tryOne)



// for (let i=100; i<=200; i++){
//     if (i%30===0){
//         console.log("Fizz Buzz " + i);
//     } else if (i%3===0){
//         console.log("Fizz " + i);
//     } else if (i%5===0){
//         console.log("Buzz " + i)
//     } else{
//         console.log(i);
//     }
// }

let users = ['sa11ySm!th', 'dogmom123', 'webDev2020', 'adminUser' ]

for (let i=0; i < users.length; i++){
   greeting(users[i])
}

function greeting(username){
    console.log(`Welcome back ${username}`)
}







let myAnimal = {
    animal: "dog",
    name: "Heidi",
    gender: "female",
    age: 7, 
    likes: ["snuggling on the couch", "milkbones", "barking out the window"]
}

console.log(myAnimal.likes[2])



function area(b1, b2, h){
    return (((b1+b2)/2)*h)
}
let tryOne=area(6, 9, 14);
console.log(tryOne)




function addUp(a, b){
    let sum=0;
    for (let i=a; i<=b; i++){
    sum=(sum+i)
    }
    return sum;
}
let tryOne = addUp(2, 5);
console.log(tryOne)

let tryTwo = addUp(1, 100);
console.log(tryTwo)

let tryThree = addUp(35, 77);
console.log(tryThree)

let tryFour = addUp(234, 567);
console.log(tryFour)


//These are the same thing, written two different ways
function howManyLegs (chickens, cows, pigs){
    return (chickens*2)+(cows*4)+(pigs*4)
}
console.log(howManyLegs(1, 2, 3))

function animals (pigs, chickens, cows){
    console.log((chickens*2)+(cows*4)+(pigs*4))
}
animals (3, 1, 2)

//Area of a Triangle
function areaOfATriangle(height, base){
    return ((height*base)/2)
}

console.log(areaOfATriangle(5, 7))

//Area of A Trapeziod
function areaOfATrap(bOne, bTwo, height){
    return (((bOne+bTwo)/2)*height)
}
console.log(areaOfATrap(1, 2, 3))


function sumOfNumbers(first, last){
    let sum = 0;
    for (let i=first; i<=last; i++){
        sum = (sum+i);   // sum+=i is the same thing
    } return sum;
}
console.log (sumOfNumbers(1, 100))

let pet = {
    animal: "dog",
    name: "MayaMoo",
    gender: "female", 
    age: 12,
    likes: ["tennis balls", "naps", "walks"]
}

console.log(pet.likes[2])