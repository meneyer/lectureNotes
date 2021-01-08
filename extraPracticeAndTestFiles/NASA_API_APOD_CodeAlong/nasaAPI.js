// console.log("hello");

const baseURL="https://api.nasa.gov/planetary/apod";
const key="FdYaSZkAkvtXE8nHbubOCdnPmbtTvtBBbALgrVlh";

//query select items up here so they are available if you write a second function.  If it's inside the displayImage function, it's only available there.
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body')
const moreInfoBtn = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');

//fetch(`${baseURL}?api_key=${key}`).then(response => response.json()).then(json => console.log(json)) <--you can also write the fetch this way if you want to think about it as being one long chain instead of breaking it up for legibility reasons.

fetch(`${baseURL}?api_key=${key}`)  //Use string interpolation since you will need to also include parameters, like the API key.  The first parameter is aways separated by a "?" -- after that "&" separates each one (if you were to add other items from the API, like the date &2020-12-23, HD photo, etc.);  As long as you get data (a response) from the fetch, the promise is resolved and the chain continues
    .then(response => response.json())  //take the response from the fetch and json-ify it
        // .then (function (response) {       can be written this way as well if you don't want to use the arrow function
             //     return response.json();
             // })
        // .then (response =>) {       can be written this way as well if you don't want to use the consise body arrow function, but open up a body
            //     return response.json();
             // })
    .then(json => displayImage(json)) //take the response (the json data) from the prior .then

function displayImage (spaceObject) {  //once you set this up, swap the console.log(json) in the second .then to displayImage(json) to call the function; the spaceObject parameter is basically a placeholder for the json data - you can name it whatever you want, data, spaceObject, etc.;  there must be a parameter in there though so that the json information from the 2nd .then has somewhere to go when the function is called; spaceObject now holds the json data from the second .then
    console.log(spaceObject)

    let img=document.createElement('img');
    img.className = "card-img-top";     //class name pulled from bootstrap card documentation
    img.src = spaceObject.hdurl;  //can also use [] notation since it is a string --> spaceObject['hdurl'] --> this would be needed if there is a space in the key (hd url, for example) as you cannot use dot notation when spaces are there.

    let title = document.createElement('h1');
    title.className = "card-title";  //class name from bootstrap card documentation
    title.innerText = spaceObject.title;
    title.style.fontFamily = "space-age"  //changed the font in JS, referencing what was created in the CSS.

    let date = document.createElement('p');
    date.className = "card-text";  //class name from bootstrap card doumentation
    date.innerText = spaceObject.date;
    date.style = "font-family: kiona-regular";  //changed the font in JS, referencing what was created in the CSS. (a second way to do this)

    let expl = document.createElement('p');
    //no expl.className needed on this one since the Bootstrap docs didn't have a class for the modal p tag
    expl.innerText = spaceObject.explanation;
    expl.style.fontFamily = "kiona-regular";

    moreInfoBtn.style.fontFamily = "kiona-regular"

    modalTitle.innerText = spaceObject.title;
    modalTitle.style.fontFamily = "space-age";


    // card.appendChild(img);  -- this worked, but it put the photo at the bottom of the card instead of at the top
    card.insertBefore(img, cardBody);  // put what you want appended first, then what you want it before second -- now the image is at the top of the card
    cardBody.insertBefore(title, moreInfoBtn)
    cardBody.insertBefore(date, moreInfoBtn)  //order matters, if you flip them, the date would be before the title
    modalBody.appendChild(expl);
}