
// object => collections of key-value pairs

// array => Collection of elements

// array methods

// forEach, map, filter, reduce


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// forEach => iterate over array and perform some task

const res = arr.forEach((element, index, array) => {
    
})

console.log(res);

// filter => return filtered array

const resArray = arr.filter((element) => element % 2 == 1)

console.log(resArray);

// map => return mapped array => array manipulation

const resArray2 = arr.map((element) => {
    if (element % 2 == 0) {
        return element * 10
    }
    return element
})

console.log(resArray2);

// reduce => reduce array to single value

const resValue = arr.reduce((previousValue, element) => {
    if(element % 2 == 0) {
        return previousValue + element
    }
    return previousValue
}, 0) // default previousValue => first element of array if not provided

console.log(resValue)


const strings = ["John", "jane", "Jack", "Jill", "Joe", "Alex", "David"]

// filter, map, reduce

let res1 = strings.filter((username) => {
    return username[0].toLowerCase() == "J".toLowerCase()
})

console.log(res1);

res1 = strings.map((first_name) => {
    return first_name.toUpperCase()
})

console.log(res1);

const users = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 95 },
    { name: "Eva", score: 88 },
]

let result = users.filter((user) => {
    return user.score > 85 && user.score < 93 && user.name == "Bob"
})

console.log(result);

result = users.reduce(function (total, user) {
    return total + user.score
}, 0)

console.log(result);