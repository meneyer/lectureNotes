// console.log("hello")

baseURL = "https://api.spacexdata.com/v4/crew"

const section = document.getElementsByTagName("body");
    console.log(section);
const body = document.createElement("div")
    document.body.appendChild(body);


fetch(baseURL)
    .then(response=>response.json())
    .then(json => displayCrew(json))
    .catch(function (err){
        console.log(err);
    })

function displayCrew(crewInfo){
    console.log(crewInfo)
    
    let names = document.createElement ("ul")
    console.log(names)
    names.innerText = "Crew Member Names & Wikipedia Links"

    let name1 = document.createElement('li')
    name1.innerText = crewInfo[0].name
    // console.log(crewInfo[0].name)
    
    let name1Wiki = document.createElement("a");
    let linkText1 =document.createTextNode (crewInfo[0].name);
    name1Wiki.appendChild(linkText1);
    // name1Wiki.title = crewInfo[0].name
    name1Wiki.href = crewInfo[0].wikipedia;
    
    let name2 = document.createElement('li')
    name2.innerText = crewInfo[1].name

    let name2Wiki = document.createElement("a");
    let linkText2 =document.createTextNode (crewInfo[1].name);
    name2Wiki.appendChild(linkText2);
    name2Wiki.href = crewInfo[1].wikipedia;

    let name3 = document.createElement('li')
    name3.innerText = crewInfo[2].name

    let name3Wiki = document.createElement("a");
    let linkText3 =document.createTextNode (crewInfo[2].name);
    name3Wiki.appendChild(linkText3);
    name3Wiki.href = crewInfo[2].wikipedia;

    let name4 = document.createElement('li')
    name4.innerText = crewInfo[3].name

    let name4Wiki = document.createElement("a");
    let linkText4 =document.createTextNode (crewInfo[3].name);
    name4Wiki.appendChild(linkText4);
    name4Wiki.href = crewInfo[3].wikipedia;

    let name5 = document.createElement('li')
    name5.innerText = crewInfo[4].name

    let name5Wiki = document.createElement("a");
    let linkText5 =document.createTextNode (crewInfo[4].name);
    name5Wiki.appendChild(linkText5);
    name5Wiki.href = crewInfo[4].wikipedia;

    let name6 = document.createElement('li')
    name6.innerText = crewInfo[5].name

    let name6Wiki = document.createElement("a");
    let linkText6 =document.createTextNode (crewInfo[5].name);
    name6Wiki.appendChild(linkText6);
    name6Wiki.href = crewInfo[5].wikipedia;

    let name7 = document.createElement('li')
    name7.innerText = crewInfo[6].name

    let name7Wiki = document.createElement("a");
    let linkText7 =document.createTextNode (crewInfo[6].name);
    name7Wiki.appendChild(linkText7);
    name7Wiki.href = crewInfo[6].wikipedia;

    let name8 = document.createElement('li')
    name8.innerText = crewInfo[7].name

    let name8Wiki = document.createElement("a");
    let linkText8 =document.createTextNode (crewInfo[6].name);
    name8Wiki.appendChild(linkText8);
    name8Wiki.href = crewInfo[6].wikipedia;

    let name9 = document.createElement('li')
    name9.innerText = crewInfo[8].name

    let name9Wiki = document.createElement("a");
    let linkText9 =document.createTextNode (crewInfo[8].name);
    name9Wiki.appendChild(linkText9);
    name9Wiki.href = crewInfo[8].wikipedia;

    let name10 = document.createElement('li')
    name10.innerText = crewInfo[9].name

    let name10Wiki = document.createElement("a");
    let linkText10 =document.createTextNode (crewInfo[9].name);
    name10Wiki.appendChild(linkText10);
    name10Wiki.href = crewInfo[9].wikipedia;

    let name11 = document.createElement('li')
    name11.innerText = crewInfo[10].name
    
    let name11Wiki = document.createElement("a");
    let linkText11 =document.createTextNode (crewInfo[10].name);
    name11Wiki.appendChild(linkText11);
    name11Wiki.href = crewInfo[10].wikipedia;

    let name12 = document.createElement('li')
    name12.innerText = crewInfo[11].name

    let name12Wiki = document.createElement("a");
    let linkText12 =document.createTextNode (crewInfo[11].name);
    name12Wiki.appendChild(linkText12);
    name12Wiki.href = crewInfo[11].wikipedia;

    let name13 = document.createElement('li')
    name13.innerText = crewInfo[12].name

    let name13Wiki = document.createElement("a");
    let linkText13 =document.createTextNode (crewInfo[12].name);
    name13Wiki.appendChild(linkText13);
    name13Wiki.href = crewInfo[12].wikipedia;


    
    body.appendChild(names);
    body.appendChild(name1);
    body.appendChild(name1Wiki);
    body.appendChild(name2);
    body.appendChild(name2Wiki);
    body.appendChild(name3);
    body.appendChild(name3Wiki);
    body.appendChild(name4);
    body.appendChild(name4Wiki);
    body.appendChild(name5);
    body.appendChild(name5Wiki);
    body.appendChild(name6);
    body.appendChild(name6Wiki);
    body.appendChild(name7);
    body.appendChild(name7Wiki);
    body.appendChild(name8);
    body.appendChild(name8Wiki);
    body.appendChild(name9);
    body.appendChild(name9Wiki);
    body.appendChild(name10);
    body.appendChild(name10Wiki);
    body.appendChild(name11);
    body.appendChild(name11Wiki);
    body.appendChild(name12);
    body.appendChild(name12Wiki);
    body.appendChild(name13);
    body.appendChild(name13Wiki);
    


}

