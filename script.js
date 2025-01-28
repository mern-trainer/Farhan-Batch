// JavaScript => Scripting Language => Create dynamic and interactive web pages
// Variable => Container to store data
// Data Types => Type of stored data in variable
// Indentifier => Name of variable, functions, classes
// Keywords => Pre-reserved words
// string => collection of characters
// array => collection of elements
// DOM => Document Object Model => A programming interface for web documents to manipulate the content, structure, events and style of the document.

// advanced JS

// Functions => Block of code/ Set of instructions that performs a specific task

// function sum(a, b) {
//     const s = a + b
//     console.log(s);
// }

// sum(10, 20)

// Arrow Functions => shorthand for functions

const sum = (a, b) => {
    return 10 + 20
}

const sample = a => a + 50

// console.log(sample(10))

// object => collection of properties / collection of key-value pairs

const person = {
    name: "John", // string
    age: 23, // number
    is_married: true, // boolean
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    }, // object
    skills: ["HTML", "CSS", "JS"] // array
}
const places = ["New York", "London", "Tokyo", "Paris", "Berlin"]

person.name = "John Doe"
person.skills.splice(1, 1, "ReactJS")

// const nm = person.name
// const ag = person.age

console.log(person);

// spread operator, rest operator, destructure

// destructure => extract data from object

// person

// const name = person.name
// const age = person.age
// const is_married = person.is_married

// const { name, age, is_married } = person

// // console.log(name, age, is_married);

// const [place1, second, _, fr] = places

// console.log(place1, second, fr);

// rest operator

// const { name, age, ...remainingObj } = person

// console.log(age, remainingObj);

// const [place1, place2, ...restArray] = places

// console.log(restArray);

// spread operator => copy data from one object or array to another

const array = [1, 2, 3]
const arr = [...array] // with reference

arr.push(4)

console.log(array, arr)

const obj = { age: 30 }
const copyObj = {...obj}
copyObj.age = 40

console.log(obj, copyObj)

// callback functions => functions that are passed as an argument to another function

const display = (value) => {
    console.log(value)
}

const calc = (a, b, callback) => {
    const s = a + b
    callback(s)
}

// const num = 10

calc(10,100,(value) => {
    console.log(value)
})


// sum of n numbers

// sync , async

const sumOfNNumbers = (n, cb) => {
    let s = 0
    for (let i = 1; i <= n; i++){
        s += i
        cb(s)
    }
}

const res = sumOfNNumbers(10, (result) => {
    console.log(result);
})

console.log(res);













