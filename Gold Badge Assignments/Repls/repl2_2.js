async function starWarsThing (){
    let starWarsFetch = await fetch ("https://swapi.dev/api/people/1/")
    let starWarsJson = await starWarsFetch.json();
    console.log(starWarsJson);
    console.log("this should print last");
  }
  
  starWarsThing();