const net = require("net")
const date = new Date()

const port = process.argv[2]

const server = net.createServer((socket) => {
    const returnString =  getCurDate() + "\n"
    socket.end(returnString)
})

function getCurDate() {
    const 
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString(),
        day = date.getDate().toString(),
        hour = date.getHours().toString(),
        mins = date.getMinutes().toString()

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${hour.padStart(2, "0")}:${mins.padStart(2, "0")}`
}

server.listen(port)