let url = 'https://rickandmortyapi.com/api/character/';

function characterImages (){
    fetch(url)
        .then((res)=>res.json())
        .then((json) => {
        console.log(json);
        let images = document.getElementsByTagName("body");
        console.log(images);
        let body = document.createElement("div");
        document.body.appendChild(body);
        let imageOne = document.createElement("img");
        console.log(json.results[0].image);
        let imageTwo = document.createElement("img");
        console.log(json.results[1].image);
        imageOne.src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
        imageTwo.src = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";
        body.appendChild(imageOne);
        body.appendChild(imageTwo);
        });
}

characterImages()