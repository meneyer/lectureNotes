// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json))


// async function slowResult(){
//     await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//         .then(res => res.json())
//         .then(json => console.log (json))
//     console.log('this is a message!')
// }

// slowResult()


async function slowResult(){
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
        .then(res => res.json())
        .then(test => {test.lolProperty = "this is a random property!"; return test;})
        .then(json => console.log(json))
    console.log('this is a message!')
}

slowResult()