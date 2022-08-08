const http = require("http")
const tmap = require("through2-map")

const port = process.argv[2]

const server = http.createServer((req, res) => {
    if (req.method === "POST") {
        req.pipe( tmap( (chunk) => {
            return chunk.toString().toUpperCase()
        } ) ).pipe(res)
    }
})


server.listen(port)