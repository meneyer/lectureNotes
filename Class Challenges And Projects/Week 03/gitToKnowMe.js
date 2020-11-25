
let gitToKnowMe = [{
    name: "Ty Ramsey",
    age: 31,
    graduatedHSYear: 2007,
    pets: true,
    petNames: ["Gus", "Sam"],
    mostRecentMovie: "Palm Springs",
    carsOwned: [{
        make: "Ford", 
        model: "F150",
    },
    {
        make: "Subaru", 
        model: "Forrester",}],
        favoritePotato: "Hashbrown"
    },
    {
        name: "Hunter Foist",
        age: 25,
        graduatedHSYear: 2018,
        pets: true,
        petNames: ["Peggy", "Sam"],
        mostRecentMovie: "BeetleJuice",
        carsOwned: [{
            make: "Ford", 
            model: "Focus",
        },
        {
            make: "VW", 
            model: "Jetta",}],
            favoritePotato: "Mashed"
        },
        {
            name: "Davison Robie",
            age: 33,
            graduatedHSYear: 2005,
            pets: true,
            petNames: ["Rosie", "Shirley", "Goldie","Candy", "Dottie", "Coco Chanel"],
            mostRecentMovie: "Parasite",
            carsOwned: [{
                make: "Dodge", 
                model: "Grand Caravan",
            }],
            favoritePotato: "Mashed"
        },
        {
            name: "Megs Neyer",
            age: 37,
            graduatedHSYear: 2001,
            pets: true,
            petNames: ["Heidi"],
            mostRecentMovie: "Hamilton",
            carsOwned: [{
                make: "Chevrolet", 
                model: "Celebrity",
            },
            {
                make: "Nissan", 
                model: "Cube"
            }],
            favoritePotato: "Waffle Fries"
        },
        {
            name: "Jeff Kaplan",
            age: 59,
            graduatedHSYear: 1979,
            pets: true,
            petNames: ["Dixie"],
            mostRecentMovie: "Airplane",
            carsOwned: [{
                make: "Land Rover", 
                model: "Defender 110",
            },
            {
                make: "Toyota", 
                model: "Supra"
            }],
            favoritePotato: "French Fry"
        },
    ]
    
    //After you create the array of objects, loop through the array to grab the mostRecentMovieWatched for each person object and PUSH those values to a GLOBAL moviesWatched variable which should be an array.
    
    //OPTION ONE
    let newArray = [];
    gitToKnowMe.forEach(student =>{
            newArray.push(student.mostRecentMovie)                      
        });
        console.log(newArray)
        
    //OPTION TWO
    let mostRecentMovieWatched = []
    for (let i=0; i<gitToKnowMe.length; i++){
        console.log(gitToKnowMe[i].mostRecentMovie);
        mostRecentMovieWatched.push(gitToKnowMe[i].mostRecentMovie);
        }
        
    console.log(mostRecentMovieWatched);

    //OPTION THREE
    for (student of gitToKnowMe) {
        mostRecentMovieWatched.push(student.mostRecentMovieWatched)
    }
