let netflix = {
    id: 1,
    name: "The Office",
    season1: {
      seasonInfo: {
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
          {
            episode: 3,
            episodeName: "Health Care",
          },
          {
            episode: 4,
            episodeName: "The Alliance",
          },
          {
            episode: 5,
            episodeName: "Basketball",
          },
        ],
      },
    },
    season2: {},
    season3: {},
  };

  //What is the name of Episode 2?
  console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);       //Diversity Day

  //EXAMPLE 2
  let contact = {};

  contact.name = "John";
  contact.phoneNumber = "3175555555";

  console.log(contact);     //name: 'John', phoneNumber: '3175555555'

  contact["notes"] = "Best friend";

  console.log(contact);     //name: 'John', phoneNumber: '3175555555', notes: 'Best friend' 

  let hasName = contact.hasOwnProperty("name");
  console.log(hasName);     //true

  delete contact.notes;
  console.log (contact);     //name: 'John', phoneNumber: '3175555555'

  let newArray = Object.keys(contact);
  console.log(newArray);      //[ 'name', 'phoneNumber' ]


  //CHALLENGE - getting form data to look like an object.
  let restaurantData = {
    restaurantName: "Qdoba", 
    yearBuilt: 1995,
    seatingCapacity: "20-90",
    carryOutOption: true,
    softDrinks: ["Pepsi", "Mountain Dew", "Coke", "Mellow Yellow", "Mr. Pibb", "Dr. Pepper"]
  };