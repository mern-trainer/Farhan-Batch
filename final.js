// Recursion, Closure

// Recursion => A function that calls itself

const counter1 = (n) => {
    if (n == 0) {
        return "Final call"
    }
    return counter1(--n)
}

console.log(counter1(3));

// counter(3) => return "Final call"
// counter(2) => return "Final call"
// counter(1) => return "Final call"
// counter(0) => return "Final call"

const sumOfNNumbers = (n) => {
    if (n == 0) {
        return n
    }
    return n + sumOfNNumbers(--n)
}

console.log(sumOfNNumbers(10));

// sumOfNNumbers(10) => 10 + sumOfNNumbers(9)
// sumOfNNumbers(9) => 9 + sumOfNNumbers(8)
// sumOfNNumbers(8) => 8 + sumOfNNumbers(7)
// sumOfNNumbers(7) => 7 + sumOfNNumbers(6)
// sumOfNNumbers(6) => 6 + sumOfNNumbers(5)
// sumOfNNumbers(5) => 5 + sumOfNNumbers(4)
// sumOfNNumbers(4) => 4 + sumOfNNumbers(3)
// sumOfNNumbers(3) => 3 + sumOfNNumbers(2)
// sumOfNNumbers(2) => 2 + sumOfNNumbers(1)
// sumOfNNumbers(1) => 1 + sumOfNNumbers(0)
// sumOfNNumbers(0) => 0

// call stack =>

// palindrome

// 12321

const checkPalindrome = (number, temp=number, reversed=0) => {
    if (temp <= 0) {
        return reversed == number
    }
    return checkPalindrome(number, Math.floor(temp / 10), (reversed * 10 + temp % 10))
}

// checkPalindrome(121, 121, 0) => true
// checkPalindrome(121, 12, 1) => true
// checkPalindrome(121, 1, 12) => true
// checkPalindrome(121, 0, 121) => true

console.log(checkPalindrome(121));

// closure => a function that have access to the parent scope even after the 
// parent function is executed

const display = () => { // parent / outer
    let value = 10
    const multiply = () => { // child / inner
        value *= 2
        return value
    }
    const subtract = () => { // child / inner
        value -= 5
        return value
    }
    return {multiply, subtract}
}

const res = display()

console.log(res.multiply());
console.log(res.multiply());
console.log(res.multiply());
console.log(res.multiply());
console.log(res.subtract());
console.log(res.subtract());
console.log(res.subtract());
console.log(res.subtract());

const counter = () => {
    let data = 0
    const increment = () => {
        data++
        return data
        // return ++data
    }
    const reset = () => {
        data = 0
        return data
    }
    const decrement = () => {
        data--
        return data
        // return --data
    }
    return {increment, reset, decrement}
}

const func = counter()

console.log(func.increment());
console.log(func.increment());
console.log(func.increment());
console.log(func.increment());
console.log(func.reset());
console.log(func.decrement());
console.log(func.decrement());
console.log(func.decrement());
console.log(func.decrement());

// curring, hoisting

// curring => a function that takes multiple arguments and returns a
// function that takes a single argument
const volume = (length, width, height) => {
    return length * width * height
} // curring

const curriedVolume = (length) => {
    console.log("Received length:", length)
    return (width) => {
        const area = length * width
        console.log("Received width:", width)
        return (height) => {
            const volume = area * height
            console.log("Received height:", height)
            return volume
        }
    }
}

// const res2 = volume(10, 20, 30)
// console.log(res2);

const res2 = curriedVolume(10)
const res3 = res2(50)

const res4 = res3(100)

console.log(res4);

// hoisting => declaring a variable or function after using it

// console.log(a); // hoisting

// var a; // declaration, not initialization

hello()

function hello() {
    console.log("Function called");
}