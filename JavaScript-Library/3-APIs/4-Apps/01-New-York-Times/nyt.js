const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //declare the baseURL of the API, this is the required endpoint for the New York Times data -- links NYT
const key = 'hbADxxmfMKMkiOlVVLt2jIWgzEGxTwXj'; //the API key I recieved after registering
let url; //

//SEARCH FORM
const searchTerm = document.querySelector('.search'); //finds the first class search in HTML
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';     //hides the previous 10 and next 10 buttons when nothing is searched
let pageNumber = 0;    
// console.log("PageNumber:", pageNumber);  //Displays a page number for more than 10 items
// let displayNav = false;

searchForm.addEventListener('submit', fetchResults); //event listener is for when the submit button is clicked in the Form.  fetch results function happens after this is clicked.
nextBtn.addEventListener('click', nextPage);  //same thing but for the nextPage function
previousBtn.addEventListener('click', previousPage); //same thing but for the previousPage function

function fetchResults(e) {     //(e) is the event handling function - allows you to interact with the object (the url)
    e.preventDefault();  //prevents the page from refreshing everything the submit button is clicked.  Doesn't actually submitting anything since we don't need to log in or sign up for something
    console.log(e);

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;  // "&q=" is another way to write querySelector
    console.log("URL", url);  //combining elements togethers into one value (defines the URL) -- NYT URL + our API key + references a page number to find what we searched for
    
    if (startDate.value !==""){             //no search date will give you all the articles
        console.log(startDate.value)
        url += '&begin_date=' +startDate.value;  //if the start date is not blank, it will be added to the URL.
    };

    if (endDate.value !==""){
        url += '&end_date' + endDate.value;
    };

    fetch(url)  //references the link where we will get the data fetched from -- fetch pulls info from another website into your website
    .then(function(result){  //then returns a promise - pulls the result object from the API
        return result.json();  //takes the result of the fetch and turns it into json
    })  .then(function(json) {  //pulls the json object from the return from the previous .then - further "json-ify"s it
        console.log(json);  //allows you see the json is functioning/working in your inspect tool
        displayResults(json);  //function: displayResults; parameter: json
    });
    console.log("this is a test");  //just to make sure stuff is connecting properly
}

function displayResults(json){  //creating the displayResults function to pull in the json result information
    while (section.firstChild){  //checks to see if the section element has any child elements - if yes, then the section needs removed so the page shows the new articles when next and previous are clicked
        section.removeChild(section.firstChild);  //removing this makes the whole thing not work - the whole page becomes unresponsive
    }
    let articles = json.response.docs;  //pulls in the json, the articles, and the documents
    
    if(articles.length===0){
        console.log("No results");      //returns no results if there are no articles
    } else {
        for (let i=0; i < articles.length; i++){
            let article = document.createElement('article');  //creating new elements for the HTML from your search results
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("current:", current);  //finds the most current article to place it first in your search

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = "Keywords: ";  //para is a p tag - "keyword" is getting added to the p tag

            for (let j=0; j<current.keywords.length; j++){
                let span = document.createElement('span');  //keywords stay together instead of being separated out line by line
                span.textContent += current.keywords[j].value + ' ';    //combines the keywords together
                para.appendChild(span);
            }

            if (current.multimedia.length > 0){
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //pulls pictures from the NYT database to display
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');  //clearfix created above in a div

            article.appendChild(heading);  //order of the result in the clearfix div
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }

    if (articles.length>=10){
        nav.style.display = "block";
    } else {
        nav.style.display = "none";  //shows or eliminates the navbar (previous/next) depending on the number of articles
    }
};

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);  //next page button functions when clicked       
}

function previousPage(e){
    if(pageNumber > 0){
        pageNumber--;
    }else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);  //previous page button functions when clicked
}