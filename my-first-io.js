const fs = require('fs')

const path = process.argv[2]

const buff = fs.readFileSync(path)

const numNewLines = buff.toString().split("\n").length - 1

console.log(numNewLines)
