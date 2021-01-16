/*
LOOPS

Loops offer a quick and easy way to do something repeatedly.

There are many different kids of loops, but they all do roughly the same thing:
    For Statements
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach (arrays only)
    .map (arrays only)
*/

//loop structure:  (a) creation of an indexing variable, (b) a run condition, (c) change to the indexing variable

//count to 10 from 0 and log the numbers:
for (let i=0; i <=10; i++){
    console.log(i);
}                       //Result 0-1-2-3-4-5-6-7-8-9-10 --> the loop was ran 10 times --> once i became 11, the code stopped running

//loops can run infinitely
/*
for (let i = 0; ; i++){
    console.log(i)
}                       //in this case, there is no ending point as the center section was left blank, so this loop would run forever....hence, why it's commented out.  :)
*/

//counts to -25 by -3, starting from 2, logs the numbers
for (let i=2; i>=-25; i=i-3){
    console.log(i);
}

//display the letters in a name individually
let name = "Kinkade";

for (let i = 0; i<name.length; i++){
    console.log(name [i]);
}                           //Result K - I - N - K - A - D - E

//for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i<= stop; i=i+increment){
    console.log(i);
}                       //the end of this result changes because random will pick a random number less than 30.  either way, the loop is working up to that random number.