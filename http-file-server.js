const http = require("http")
const fs = require("fs")

const
    port = process.argv[2],
    fileLoc = process.argv[3]



const server = http.createServer((req, res) => {
    let fileStream = fs.createReadStream(fileLoc)
    fileStream.pipe(res)
})


server.listen(port)