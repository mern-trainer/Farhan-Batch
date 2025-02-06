// oops => Object Oriented Programming System
// class and objects

// Class => Template or Blueprint for creating objects
// Objects => Instance of class
// Constructor Function => Special method in class
// Methods => Functions inside class
// Properties => Variables inside class

// this => Reference to current object, global object

class Vehicle{
    
    constructor(name) {
        this.name = name
    }

    display() {
        console.log(this.name);
    }


}

const v = new Vehicle("Bike") 

// v.display()

// 4 pillers of oops

// 1. Encapsulation => Hiding of data / binding of data into a single unit
// access modifiers => public, private
// 2. Abstraction => Hiding of implementation details
// 3. Inheritance => Reusability of code => using extends keyword
// 4. Polymorphism => Multiple forms
        // overloading => same method name with different parameters
// overriding => same method name with same parameters
        
class Bike extends Vehicle{
    add() {
        console.log("sample");
    }
} 

const bike = new Bike("Sample Bike")

// bike.display()

// bike.add()

class Calculator { // parent class
    calc(a, b) {
        return a + b
    }
}

class Sub extends Calculator{ // Sub => child class
    //@override
    calc(a, b) {
        return a - b
    }

    parentCalc(a, b) {
        return super.calc(a, b)
    }
}

const sub = new Sub()

console.log(sub.calc(20, 1));
console.log(sub.parentCalc(20, 1));

// calculator => add, sub, mul, div

// Book Information System

class Book{

    #title; 
    #author;
    #price;
    #books;

    constructor() {
        this.#books = []
    }

    add(title, author, price) {
        this.#title = title
        this.#author = author
        this.#price = price
        const bookObj = {
            title: this.#title,
            author: this.#author,
            price: this.#price
        }
        this.#books.push(bookObj)
        return bookObj
    }

    delete(index) {
        const deleted = this.#books[index]
        this.#books.splice(index, 1)
        return deleted
    }

    list() {
        return this.#books
    }

}

const bk = new Book()

bk.add("sample", "alex", 100)
bk.add("sample2", "alex2", 200)
bk.add("sample3", "alex3", 300)

console.log(bk.delete(1));

console.log(bk.list());

