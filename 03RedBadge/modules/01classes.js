class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }

    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }

    //Method 2
    status(){
        console.log("Current status: " + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous dude");

//We can now use the instance and the .operator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status ();

/*  
When run, this comes back:

Welcome back, Anonymous dude
Current status: Trial User
Welcome back, Anonymous lady
Current status: Trial User
Welcome back, Jeff
Current status: Trial User
*/

//////////////////////////////////////////////////

//name the class
class User{
    //we call the constructor function and create parameters - These will be values that we want to be passed in and stored in the object
    constructor(first, last, e){
        //On the right side of the expressions, the word "first, last and e" below - we have the value that is getting passed into the parens when the object is created.
        this.f = first;
        this.l = last;
        this.email = e;
        //on the right side we have the actual properties of the object.
        //the left side stores the incoming value from teh right side as the property for 'this' specific object being created
    }
}

var userOne = new User("Paul", "O'Connor", "poconner@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); // Paul
console.log(userOne.l); //O'Connor
console.log(userOne);  // User { f: 'Paul', l: "O'Connor", email: 'poconner@elevenfifty.org' }

//practice
class Player{
    constructor(name, number, points){
        this.name = name;
        this.number = number;
        this.points = points;
    }
}

let playerOne = new Player("Reggie", 31, 36);
console.log(playerOne);
console.log(playerOne.name);
console.log(playerOne.number);
console.log(playerOne.points);

/*
Player { name: 'Reggie', number: 31, points: 36 }
Reggie
31
36
*/

//////////////////////////////////////////////////

//EXTENDS
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    greet(){
        console.log('Welcome back, ' + this.name);
    }

    status(){
        console.log("Current status: " + this.type);
    }
}

class TrialUser extends User{
    trialEnding(){
        console.log("Your trial will be ending soon, " + this.name + ".  " + "Would you like to join our program?")
    }
}

class BannedUser extends User{
    bannedPerson(){
        console.log("You have been banned from this site, " + this.name + ".  " + "Please go away")
    }
}

var anonDude = new User("Anonymous");
anonDude.greet();  //Welcome back, Anonymous
anonDude.status();  // Current status: Trial User

var trialUser = new TrialUser("Paul");
trialUser.greet();  // Welcome back, Paul
trialUser.trialEnding();  //Your trial will be ending soon, Paul.  Would you like to join our program?
trialUser.status();  //  Current status: Trial User

var bannedUser = new BannedUser("George");
bannedUser.greet();  //  Welcome back, George
bannedUser.bannedPerson();  //You have been banned from this site, George.  Please go away

//////////////////////////////////////////////////

//SUPER
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    greet(){
        console.log('Welcome back, ' + this.name);
    }

    status(){
        console.log("Current status: " + this.type);
    }
}

var anonDude = new User("Anonymous");
anonDude.greet();  //Welcome back, Anonymous
anonDude.status();  // Current status: Trial User

class BronzeLevelUser extends User {
    //we add the ccinfo property to the user here
    constructor(username, password, ccinfo){
        //if you are going to use 'this' in your constructor, you must have 'super' that points to the parent constructor
        super(username, password);
        this.type = "Bronze User";  //this changed the type from the parent above. 
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

var bronzeGuy = new BronzeLevelUser ("Bronze Dude", "bronze7589", "4242424242424242");
bronzeGuy.greet();  //Welcome back, Bronze Dude
bronzeGuy.status();  //Current status: Bronze User
console.log(bronzeGuy);  //BronzeLevelUser { name: 'Bronze Dude', type: 'Bronze User',  ccinfo: '4242424242424242' }