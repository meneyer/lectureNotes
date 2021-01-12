// setTimeout(() => console.log("This is a test of timeouts"), 1000);

let promise = new Promise(function (resolve, reject){
    setTimeout(() => {
        if (true){
            resolve('success');
        } else {
            reject('failure')
        }
    }, 3000);
})

promise                                     //this runs after 3 seconds (3000ms) from above
    .then(blah =>console.log(blah))        //in this case, "blah" equals success from above as it was successful.   .then only handles resolve cases
    .catch(err => console.log(err))         //err = failure -- this runs if the word true above is flipped to false.   .catch handles reject cases


console.log('this code is after our promise & .then chain!');   //this runs immediately since it's not part of the chunk above

function playFunc(){
    return 5;
}
console.log(playFunc())
