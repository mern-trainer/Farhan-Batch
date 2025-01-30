// callback = A function that is passed as an argument to another function and is called inside the inner function.

const num = 7

// 2 factors

function isPrime(number, callback){
    if (number <= 1) {
        return callback(false)
    }
    for (let i = 2; i <= number / 2; i++){
        if (number % i) {
            return callback(true)
        }
    }
    return callback(false)
}

// 7 / 2 = 3.5
// 7 / 3 =

const a = 10
const b = a

function handle(value) {
    console.log(value);
}

isPrime(7, handle)