const process = require("process");

// Get numbers from  process.
let numbers = process.argv.splice(2)

// Confirm numbers are all numbers
if (numbers.every(x => {typeof parseInt(x) != NaN})) {
    console.log("All arguments must be a number")
    process.exit(1)
}

let sum = 0

numbers.forEach(n => sum += parseInt(n))

console.log(sum)