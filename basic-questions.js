// 1. Find larget number in an array of numbers.

const is_palindrome = (number) => {
    if (typeof number != "number") {
        return false
    }
    let temp = number
    let reversed = 0
    while (temp > 0) { // 123, 12, 1
        const lastDigit = temp % 10 // 123 % 10 => 3, 12 % 10 => 2, 1 % 10 => 1
        reversed = reversed * 10 + lastDigit // 0 * 10 + 3 => 3, 3 * 10 + 2 => 32, 32 * 10 + 1 => 321
        temp = Math.floor(temp / 10) // 123 / 10 => 12, 12 / 10 => 1, 
    }
    return number === reversed // 123 === 321
}

const sumOfPalindrome = (arr, cb) => {
    let sum = 0
    for (let index = 0; index < arr.length; index++){
        const result = is_palindrome(arr[index])
        if (result) {
            sum += arr[index]
        }
    }
    cb(sum)
}

sumOfPalindrome([121, 232, 987], function (value) {
    console.log(value)
})