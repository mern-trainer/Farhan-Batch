// oops => Object Oriented Programming System
// class and objects

// Class => Template or Blueprint for creating objects
// Objects => Instance of class
// Constructor Function => Special method in class
// Methods => Functions inside class
// Properties => Variables inside class

// this => Reference to current object, global object

class Vehicle{

    #name;
    
    constructor(name) {
        this.#name = name
    }

    display() {
        console.log(this.#name);
    }
}

const v = new Vehicle("Bike") 

v.name = "Hello"

v.display()



