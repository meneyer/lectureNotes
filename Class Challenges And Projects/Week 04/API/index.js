console.log("hello");  //this is just to check to make sure the two files are linked - you will see this in the console on chrome - Rob recommends do this before you start making an API so you can verify.

const baseURL = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener("click", fetchJokes);

function fetchJokes(){
    // alert('it worked');  //this another way to test to see if the event listener worked - an alert will pop up on chrome when you click the button.
    fetch(baseURL)
        .then((res)=>res.json())
        .then((json) => displayJoke(json.value)); //json.value got the value in the json object (which is where the joke lives in this API) in the console.
}

function displayJoke(joke){
    let jokeText = document.getElementById("joke");

    jokeText.innerText = joke;
}