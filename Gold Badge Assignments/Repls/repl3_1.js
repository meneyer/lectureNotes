/* Using the index.html and index.js files provided, write a webpage that asks the user for input on a store, a quantity, and a product.

Save the user input in three (3) separate variables.

Once the user has input their information, your webpage should console.log a sentence using those three (3) variables.

Then, using DOM manipulation, you should also display the user input to the screen.

For example: 'I shopped at Target for 5 apples' may be output to the console & screen. This does not need to be styled in any sort of fashion, but feel free to if you would like! */


const submitBtn = document.getElementById("form");

submitBtn.addEventListener("submit", displayResults);
    console.log("success");

function displayResults(e){
        e.preventDefault();  
    let store = document.querySelector("#storeItem").value;
    console.log (store);    
    let quantity = document.getElementById ("quantityItem").value;
    console.log (quantity);  
    let product = document.getElementById ("productItem").value;
    console.log (product);

    let sentence = (`I went to ${store} and purchased ${quantity} ${product}.`);
    console.log(sentence);

    let body = document.createElement("div");
    document.body.appendChild(body);
    let displaySentence = document.createElement('p');
    // console.log (displaySentence);
    displaySentence.innerText = (`I went to ${store} and purchased ${quantity} ${product}.`);
    body.appendChild(displaySentence);
}
// displayResults()

