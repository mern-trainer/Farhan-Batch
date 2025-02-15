// Memoization => Optimizing a program by storing the results of expensive function calls
                // and returning the cached result when the same inputs occur again

// Map => Collection of key-value pairs

// const map = new Map()

// map.set("name", "John Doe")
// map.set("age", 23)
// map.set("is_married", true)
// map.set("address", {
//     city: "New York",
//     state: "NY",
//     country: "USA"
// })

// console.log(map.get("address"));

// console.log(map.has("address"));

// map.delete("age")

// // map.clear()

// console.log(map.size);

// console.log(map);

const cache = new Map()

const sumOfTwoNumbers = (firstNumber, secondNumber) => {
    const key = `${firstNumber},${secondNumber}`
    if (cache.has(key)) {
        return cache.get(key)
    }
    console.log("Calculating...")
    const sum = firstNumber + secondNumber
    cache.set(key, sum)
    return sum
}

// console.log(sumOfTwoNumbers(10, 20))
// console.log(sumOfTwoNumbers(10, 20))
// console.log(sumOfTwoNumbers(10, 30))
// console.log(sumOfTwoNumbers(10, 20))
// console.log(sumOfTwoNumbers(10, 22))
// console.log(sumOfTwoNumbers(102, 2))
// console.log(sumOfTwoNumbers(10, 20))

// console.log(cache);

const store = new Map()

const getUsers = async (limit) => {
    if (store.has(limit)) {
        return store.get(limit)
    }
    console.log("Fetching users...")
    const response = await fetch(`https://api.escuelajs.co/api/v1/users?limit=${limit}`)
    const result = await response.json()
    store.set(limit, result)
    return result
}

const handleUsers = async () => {
    let users = await getUsers(10)
    console.log(users);
    users = await getUsers(10)
    console.log(users);
    users = await getUsers(10)
    console.log(users);
    users = await getUsers(10)
    console.log(users);
    users = await getUsers(12)
    console.log(users);
    users = await getUsers(12)
    console.log(users);
}

handleUsers()