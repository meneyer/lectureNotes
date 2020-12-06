// let starWarsPeopleList = document.querySelector('ul');

// fetch('https://swapi.dev/api/people')
// .then(function(response) {
//     return response.json();
// })
// .then (function(json){
//     let people = json.results;

//     for (p of people){
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }    
// })

let starWarsSpecies = document.querySelector('ul');

fetch('https://swapi.dev/api/species')
.then(function(response) {
    return response.json();
})
.then (function(json){
    let species = json.results;

    for (s of species){
        let listItem = document.createElement('li');
        listItem.innerHTML = "<p>" + s.eye_colors + "</p>";
        starWarsSpecies.appendChild(listItem);
    }
})