const http = require("http")

const url = process.argv[2]

http.get(url, (res) => {
    const data = []

    res.on("data", (chunk) => {
        data.push(chunk)
    })
    res.on("error", console.error)
    res.on("close", () => {
        let stringList = data.map((buf) => {
            return String(buf)
        })
        let string = data.join("")
        console.log(string.length)
        console.log(string)
    })

})