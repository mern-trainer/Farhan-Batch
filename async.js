// // // sync => synchronous => single task at a time => line by line execution
// // // async => asynchronous => Multiple task at a time => No order

// // // setTimeout(() => { // delay
// // //     console.log("Hello");
// // // }, 5000) // 5000ms = 5s
// // // console.log("Hi");

// // // setInterval(() => {
// // //     const dateTime = new Date()
// // //     document.body.innerHTML = dateTime
// // // }, 1000);

// // // promise => A way to handle asynchronous operations.
// // // states -> Pending, Fulfilled, Rejected, (fulfiled or rejected promise -> Settled)

// // // const getData = () => {
// // //     setTimeout(() => {
// // //         return "Hi"
// // //     }, 3000);
// // // }

// // // const result = getData()

// // // console.log(result);

// // const getData = () => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             reject("Hello")
// //         }, 5000);
// //     })
// // }

// // // getData().then((result) => {
// // //     console.log("success:", result);
// // // }).catch((error) => { // error handling
// // //     console.log("error:",error);
// // // })

// // // async await => new feature

// // // async function handleCall() {
// // //     const response = await getData()
// // //     console.log(response);
// // // }

// // const handleCall = async () => {
// //     try { // Error handling
// //         const response = await getData()
// //         console.log(response);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // handleCall()

// // API => Application Programming Interface
// // server -> server, client to server -> server to client

// // fetch => fetch data from server

// // const getDataFromServer = async () => {
// //     const response = await fetch("https://dummyjson.com/products")
// //     const res = await response.json()
// //     const products = res.products
// //     for (let idx = 0; idx < products.length; idx++){
// //         const { title, price, thumbnail } = products[idx]
// //         document.body.innerHTML += `<div>
// //             <div>
// //                 <img src="${thumbnail}" alt="${title}"/>
// //             </div>
// //             <div style="text-align: center;">
// //                 <h3>${title}</h3>
// //                 <p>$${price}</p>
// //             </div>
// //         </div>`
// //     }
// // }

// // getDataFromServer()

// // Set, Map, Memoization

// const obj = {
//     name: "John",
//     age: 23,
//     address: {
//         city: "New York",
//         state: "NY",
//         country: "USA"
//     },
//     skills: ["HTML", "CSS", "JS"]
// }

// // console.log(obj.skills.push("ReactJS"));

// // console.log(obj);

// // array => collection of elements -> Duplication allowed
// // Set => collection of unique elements -> Duplication not allowed
// // Map => collection of key-value pairs

// // Set => Constructor -> SetConstructor
// // Map => Constructor -> MapConstructor

// const s = new Set()

// s.add(20)
// s.add(10)
// s.add(30)

// // s.delete(10)

// console.log(s.has(210));

// // s.clear()

// console.log(s.size);

// console.log(s);

// const toArray = Array.from(s)

// console.log(toArray);

// // Remove duplicate

// const arr = [1, 2, 3, 4, 2, 6, 4, 2, 1, 3, 4, 5]

// const set = new Set(arr)

// const uniqueArr = Array.from(set)

// console.log(uniqueArr);


// // Map

// // key => value

// const map = new Map()

// map.set("name", "Arjun")
// map.set("age", 23)
// map.set("address", { city: "New York", state: "NY", country: "USA" })

// // map.delete("address")

// console.log(map.has("address"));

// console.log(map.size);

// // map.clear()

// console.log(map.get("address"));

// console.log(map);

// // Memoization => caching => store value in memory => faster performance => Store previous results
// // Performance optimization technique

// const cache = new Map()

// const sumOfNumbers = (firstNumber, secondNumber) => {
//     const key = `${firstNumber},${secondNumber}`
//     if (cache.has(key)) {
//         return cache.get(key)
//     }
//     console.log("Calculating sum of numbers..."+key)
//     const sum = firstNumber + secondNumber
//     cache.set(key, sum)
//     return sum
// }

// console.log(sumOfNumbers(10, 22)) // 10,22
// console.log(sumOfNumbers(102, 2)) // 102,2
// console.log(sumOfNumbers(10, 20))
// console.log(sumOfNumbers(10, 20))
// console.log(sumOfNumbers(10, 20))
// console.log(sumOfNumbers(10, 20))
// console.log(sumOfNumbers(20, 10))
// console.log(sumOfNumbers(23, 17))
// console.log(sumOfNumbers(23, 17))
// console.log(sumOfNumbers(23, 17))
// console.log(sumOfNumbers(100, 7))
// console.log(sumOfNumbers(101, 100))

const api = "https://dummyjson.com/products"

const store = new Map()

const getSingleProduct = async (id) => {
    try {
        if (store.has(id)) {
            return store.get(id)
        }
        console.log("Fetching data...")
        const response = await fetch(`${api}/${id}`)
        const result = await response.json()
        store.set(id, result)
        return result
    } catch (err) {
        console.log(err.message)
    }
}

const getData = async () => {
    let res = await getSingleProduct(1)
    console.log(res);
    res = await getSingleProduct(1)
    console.log(res);
}

getData()