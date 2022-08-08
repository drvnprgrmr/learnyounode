const http = require("http");

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const url = new URL("https://localhost" + req.url);
    const iso = new Date(url.searchParams.get("iso"));

    res.writeHead(200, { "Content-Type": "application/json" });

    switch (url.pathname) {
        case "/api/parsetime":
            const timeRes = {
                hour: iso.getHours(),
                minute: iso.getMinutes(),
                second: iso.getSeconds(),
            };
            const res1 = JSON.stringify(timeRes)
            res.end(res1);
            break;

        case "/api/unixtime":
            const unix = iso.getTime()
            const res2 = JSON.stringify({ unixtime: unix })
            res.end(res2);

            break;

        default:
            res.writeHead("404")
            res.end()
            break
    }

    
});

server.listen(port);
