/*Write a fat arrow async function that does the following:
Uses await to fetch data from this endpoint - 'https://swapi.dev/api/people/<number here>/'
Uses await to jsonify the response received from the fetch
console.log the results of the fetch before console.logging a message saying 'this should print last'
our console.log of 'this should print last' should be accessed by using a promise resolver*/


// fixed 12-10-20 following Nav's example below
const starWarsThing = async() =>{
    let starWarsFetch = await fetch ("https://swapi.dev/api/people/1/")
    let starWarsJson = await starWarsFetch.json()
    console.log(starWarsJson)
    return "this should print last";
}
  
starWarsThing().then(console.log);

// console.log ("hello");


/*
Nav's Example 12-10-20

const getLuke = async()=>{
  let res = await fetch('https://swapi.dev/api/people/1/')
  let data = await res.json()
  console.log(data)
  return 'this should print last'
}

// getLuke().then(console.log);
*/


// function sayHello(){
//   console.log('this should print')
// }

// sayHello()

