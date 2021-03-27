/*
CLASSES

Classese are 'special functions' that can be defined by either class declaration, or class expression -- just like regular functions
            //Regular Function as Function Declaration
            function myFunc(){

            }

            //Regular Function as a Function Expression
            let myFunc = function(){

            }

Classes act as a blueprints for creating objects that share methods and properties
    We use that blueprint to create new objects or instances of that class, and each of these objects can have different values for the properties they hold.  
        EX: model could be a property of a class of Automobile, and each new automobile we create that's a copy of our original class could have a different value for the property model.

            //Function gets 2 parameters and get called with the argument
            function myFunc(string, number){
                console.log(string, number);
            }

            myFunc('this is a string', 5)
            myFunc('this is a second string', 10)

            answer:  this is a string 5
            answer:  this is a second string 10

The body of a class is in between the curly braces {} -- just like regular functions
    The body of a class is where you define class members, such as methods or a constructor

The constructor method is a special method for creating and initializing an object created with a class.
    There can only be ONE method with the name of the constructor in a class
        A constructor can use the 'super' keyword to call the constuctor of the super class
            The super keyword is used to access and call functions (or methods) on an objects parent

JavaScripts classes were introduced in ES5, and is a new way to write JavaScript's previous existing prototype-based inheritance, which is a way of creating an object that acts as a blueprint, to create other ojects that share the properties and methods as the parent.
    Classes are the closest thing in a a vanilla JavaSript to Object Oriented Programming.        
*/


// CLASS DECLARATION
    // Class Declarations are NOT hoisted, even though Function Declarations can be.  So, Class Declations need to be a declared before accessing it.

class Automobile{
    constructor(make, model){
        //inside the constructor, you must assign the names of the keys that will hold the parameters
        this.make = make;
        this.model = model;
        //  this.model is the key, model is the value
        //  "this" refers to the object it belongs to.  in this case, that's Automobile -- so when run it would be Automobile {make, model}
    }
}


//CLASS EXPRESSION
    //Can be named or unnamed (anonymous)

//unnamed
let Vehicle = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}
console.log(Vehicle.name) //Vehicle -- no name as the class is anonymous -- .name gives us the name of the function

//named
let Vehicle = class VehicleTwo {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}
console.log(Vehicle.name)  //VehicleTwo -- We get the name of the function here since it is not anonymous


// METHODS
    //Methods are basically just functions that are passed down to all the new instances of the class that we create

//Method definition - old syntax
const automobile = {
    start: function () {

    },
    stop: function() {

    }
}

//proto-type method - new syntax
const automobile = {
    start(){

    }, 
    stop(){

    }
}

//////////////////////////////////////////////////////////////////////////////////////////

class Automobile {
    constructor(make, model){
        this.make = make;
        this.model = model
    }

    //method 1
    start(){
        console.log(`The ${this.make} ${this.model}'s engine started`)
    }

    stop(){
        console.log(`The ${this.make} ${this.model}'s engine stopped`)
    }
}

//NEW INSTANCES - using the 'new' keyword, we can use our class of Automobile as a blueprint to creat a new object/instance of our Automobile class

//new object/instance of Automobile class
let hondaCivic = new Automobile('Honda', 'Civic');
console.log(hondaCivic);  //   Automobile { make: 'Honda', model: 'Civic' }
console.log(hondaCivic.make);   //  Honda
console.log(hondaCivic.model);   //  Civic

//we can use dot notation to access the methods that were inherited when we created the new instance of the class
hondaCivic.start();  //  The Honda Civic's engine started
hondaCivic.stop();  //  The Honda Civic's engine stopped

//another new object/instance of the Automobile class 
let fordEscape = new Automobile ("Ford", "Escape");
console.log(fordEscape);  //Automobile { make: 'Ford', model: 'Escape' }
console.log(fordEscape.make);  //Ford
console.log(fordEscape.model);  //Escape
fordEscape.start();  //The Ford Escape's engine started
fordEscape.stop();  //The Ford Escape's engine stopped


//////////////////////////////////////////////////////////////////////////////////////////


/*
CONSTRUCTOR METHOD

The constructor method is a special method that helps us create and initialize an object created from a class
    --works in tandem with the "new" keyword

The constructor method needs to be included for use to create new objects/instances of our class, so we can set properties, as well as pass in values for those properties when creating the new objects/instances

*/

//name the class
class Cookie {
    //we call the constructor method and pass in parameters.  Those parameters will hold the values that we pass in when creating a new object based off of the class of Cookie
    constructor(type, icing, shape){
                //on the right side of the expression, these are the parameters that accept the values from each new object we create.
        this.t = type;
        this.i = icing;
        this.s = shape;
        //on the left side of the expression, we assign the keys for the values that we pass in when creating a new class
    }
}

let chocolateChip = new Cookie ("chocolate chip", false, "circle");
console.log(chocolateChip);   //  Cookie { t: 'chocolate chip', i: false, s: 'circle' }
console.log(chocolateChip.type)  // undefined as type is the parameter name, not the key name
console.log(chocolateChip.t)  // chocolate chip
console.log(chocolateChip.i)  // false
console.log(chocolateChip.s) // circle


//////////////////////////////////////////////////////////////////////////////////////////


/*
EXTENDS

The extends keyword is used in either class declaration or class expressions to create a new class as a child of a nother class

Each new class we create that extends fro mteh parent class not only inherits the properties and methods from the parent class, but it also can have its own properties and methods as well

Also referred to as a subclass
*/

//PARENT CLASS
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eats their food`);
    }
}

// SUBCLASS
class Dog extends Animal {
    constructor(name, breed){
        //JS requires us to call the super method inside of the constructor method - before anything else - or we won't have access to the "this" keyword
        super(name);
        this.type = breed;
    }

    play(){
        console.log(`${this.name} fetches the ball`);
    }
}

let Luna = new Dog('Luna', 'Husky');
console.log(Luna);  // Dog { name: 'Luna', type: 'Husky' }
Luna.eat();  //  Luna eats their food
Luna.play();  //  Luna fetches the ball
// Animal.play()  //This throws an error "Animal.play is not a function" as the play method is only in the subclass