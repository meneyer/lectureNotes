console.log("hello");

let baseURL = "https://picsum.photos/v2/list"

let title = document.getElementsByTagName("h1");
    console.log(title);
let subtitle = document.querySelectorAll("h2");
    console.log(subtitle);

let author = document.querySelectorAll("h4")
    console.log(author);



title[0].innerText = "Lorem Picsum";
subtitle[0].innerText = "API Project";
subtitle[1].innerText = "December 2020";


let section1 = document.getElementById("image1");
    console.log(section1);
let section2 = document.querySelector(".image2")
    console.log(section2);
let section3 = document.getElementById("image3")
    console.log(section3);
let section4 = document.querySelector(".image4")
    console.log(section4);
let section6 = document.getElementById("image6")
    console.log(section6);



function displayResults(){
    console.log()
    
    fetch (baseURL)
    .then(function(result){
        return result.json()
    })
    .then(function(json){
        console.log(json);
        
        let imageOne = document.createElement("img");
        console.log(json[29].download_url)
        imageOne.src = json[29].download_url
        section1.appendChild(imageOne).width = "390";
        author[0].innerText = "photo credit: " + (json[29].author)
        console.log(json[29].author)
        
        
        let sectionL1 = document.getElementById("linkOne")

        console.log(sectionL1);
        sectionL1.setAttribute("href", json[29].url)
        sectionL1.innerText = json[29].url
     
      
       
        
      
                
        let imageTwo = document.createElement("img");
        console.log(json[19].download_url)    
        imageTwo.src = json[19].download_url
        section2.appendChild(imageTwo).width = "410";
        author[1].innerText = "photo credit: " +  (json[19].author)
        console.log(json[19].author)
        // link[1].innerText = (json[19].url)
        // console.log(json[19].url)
                
        let imageThree = document.createElement("img");
        console.log(json[20].download_url)    
        imageThree.src = json[20].download_url
        section3.appendChild(imageThree).width = "225";
        author[2].innerText = "photo credit: " +  (json[20].author)
        console.log(json[20].author) 
        // link[2].innerText = (json[20].url)
        // console.log(json[20].url)
                
        let imageFour = document.createElement("img");
        console.log(json[21].download_url)    
        imageFour.src = json[21].download_url
        section4.appendChild(imageFour).width = "250";
        author[3].innerText = "photo credit: " +  (json[21].author)
        console.log(json[21].author)
        // link[3].innerText = (json[21].url)
        // console.log(json[21].url)
        
        let imageSix = document.createElement("img");
        console.log(json[7].download_url)    
        imageSix.src = json[7].download_url
        section6.appendChild(imageSix).width = "300";
        author[4].innerText = "photo by: " +  (json[7].author)
        console.log(json[7].author) 
        // link[4].innerText = (json[7].url)
        // console.log(json[7].url)
    })
    .catch(function(err){
        console.log(err);
    })
}    
displayResults()



//A DIFFERENT OPTION WITH THE FETCH OUTSIDE - BOTH WORK
// console.log("hello");

// let baseURL = "https://picsum.photos/v2/list"
// const image = document.getElementById("images");

// fetch (baseURL)
// .then(function(result){
//     return result.json()
// })
// .then(function(json){
//     console.log(json);
//     displayResults(json)    
// })
// .catch(function(err){
//     console.log(err);
// })

// function displayResults(json){
//     console.log(json[0])
    
//     let section1 = document.getElementById("image1");
    // console.log(section1);
    // let imageOne = document.createElement("img");
    // console.log(json[29].download_url)
    // imageOne.src = "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
    // imageOne.src = json[29].download_url
    // section1.appendChild(imageOne).width = "400";

    // let section2 = document.getElementById("image2")
    // let imageTwo = document.createElement("img");
    // console.log(json[19].download_url)    
    // imageTwo.src = "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
    // imageTwo.src = json[19].download_url
    // section2.appendChild(imageTwo).width = "450";
    
    // let section3 = document.getElementById("image3")
    // let imageThree = document.createElement("img");
    // console.log(json[20].download_url)    
    // imageThree.src = "https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc"
    // imageThree.src = json[20].download_url
    // section3.appendChild(imageThree).width = "300";
      
    // let section4 = document.getElementById("image4")
    // let imageFour = document.createElement("img");
    // console.log(json[21].download_url)    
    // imageFour.src = "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
    // imageFour.src = json[21].download_url
    // section4.appendChild(imageFour).width = "300";
 
    // let section5 = document.getElementById("image5")
    // let imageFive = document.createElement("img");
        // // console.log(json[26].download_url)    
    // imageFive.src = "https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0"
    //imageFive.src = json[26].download_url
    // section5.appendChild(imageFive).width = "300";
  
    // let section6 = document.getElementById("image6")
    // let imageSix = document.createElement("img");
    // console.log(json[7].download_url)    
    // imageSix.src = "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk"
    // imageSix.src = json[7].download_url
    // section6.appendChild(imageSix).width = "300";
// }
// displayResults()