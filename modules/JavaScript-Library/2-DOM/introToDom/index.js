//getElementById
// const header = document.getElementById('header');
// console.log(header);

// header.style.color = "pink";  //changed the color of the header
// header.innerText = "Hello World";  //changed the words in the header


//getElementByClassName
// const errorList = document.getElementsByClassName("error-list");
// console.log(errorList);

// errorList[0].innerText = "I changed error 1";

// //Example 1 Looping
// for (let i = 0; i< errorList.length; i++){
//     errorList[i].style.color = "red"
// }

// // //Example 2 Looping
// // for (error of errorList){
// //     error.style.color = "green";
// }

//Example 3 Looping (forEach - CANNOT DO)
// errorList.forEach((error) => (error.style.color = "purple"))


// //getElementsByTagName
// const tags = document.getElementsByTagName("p");
// console.log(tags);
// tags[0].innerText = "I changed the text for the paragraph by using my variable with the array position afterwards then innertext.  Woot."

// const liTags = document.getElementsByTagName('li');
// console.log(liTags);

// for (let i=0; i<liTags.length; i++){
//     liTags[i].style.fontStyle = "italic";
// }





//querySelector
// const header = document.querySelector("h1");    -- both options work
const header = document.querySelector("#header");
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2);


//querySelectorAll
const headerTags = document.querySelectorAll("h1");
console.log(headerTags)

console.log(headerTags[1]);

headerTags.forEach(h => {
    h.style.color = "blue"
})

const listItems = document.querySelectorAll(".error-list");
listItems.forEach(li => {
    li.style.fontStyle = "italic";
})
