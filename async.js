// // sync => synchronous => single task at a time => line by line execution
// // async => asynchronous => Multiple task at a time => No order

// // setTimeout(() => { // delay
// //     console.log("Hello");
// // }, 5000) // 5000ms = 5s
// // console.log("Hi");

// // setInterval(() => {
// //     const dateTime = new Date()
// //     document.body.innerHTML = dateTime
// // }, 1000);

// // promise => A way to handle asynchronous operations.
// // states -> Pending, Fulfilled, Rejected, (fulfiled or rejected promise -> Settled)

// // const getData = () => {
// //     setTimeout(() => {
// //         return "Hi"
// //     }, 3000);
// // }

// // const result = getData()

// // console.log(result);

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Hello")
//         }, 5000);
//     })
// }

// // getData().then((result) => {
// //     console.log("success:", result);
// // }).catch((error) => { // error handling
// //     console.log("error:",error);
// // })

// // async await => new feature

// // async function handleCall() {
// //     const response = await getData()
// //     console.log(response);
// // }

// const handleCall = async () => {
//     try { // Error handling
//         const response = await getData()
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// handleCall()

// API => Application Programming Interface
// server -> server, client to server -> server to client

// fetch => fetch data from server

const getDataFromServer = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const res = await response.json()
    const products = res.products
    for (let idx = 0; idx < products.length; idx++){
        const { title, price, thumbnail } = products[idx]
        document.body.innerHTML += `<div>
            <div>
                <img src="${thumbnail}" alt="${title}"/>
            </div>
            <div style="text-align: center;">
                <h3>${title}</h3>
                <p>$${price}</p>
            </div>
        </div>`
    }
}

getDataFromServer()