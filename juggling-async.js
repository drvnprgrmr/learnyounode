const http = require("http");

const urls = process.argv.slice(2);

const urlsIter = urls[Symbol.iterator]();

function jugglingAsync(urls) {
    http.get(urls[0], (res) => {
        const data = [];

        res.on("data", (chunk) => {
            data.push(chunk);
        });
        res.on("error", console.error);
        res.on("close", () => {
            let string = data.join("");
            console.log(string);

            http.get(urls[1], (res) => {
                const data = [];

                res.on("data", (chunk) => {
                    data.push(chunk);
                });
                res.on("error", console.error);
                res.on("close", () => {
                    let string = data.join("");
                    console.log(string);

                    http.get(urls[2], (res) => {
                        const data = [];

                        res.on("data", (chunk) => {
                            data.push(chunk);
                        });
                        res.on("error", console.error);
                        res.on("close", () => {
                            let string = data.join("");
                            console.log(string);
                        });
                    });
                });
            });
        });
    });
}

// jugglingAsync(urls)


// I DID IT !!!
/**
 * Using iterators I was able to 
 * implement the same function `jugglingAsync`
 * hence now i can do it  for an arbitarty number of urls. :)
 */

function juggleAsync() {
    nextUrl = urlsIter.next();
    if (!nextUrl.done) {
        let url = nextUrl.value;
        // console.log(url)

        http.get(url, (res) => {
            const data = [];

            res.on("data", (chunk) => {
                data.push(chunk);
            });
            res.on("error", console.error);
            res.on("close", () => {
                let string = data.join("");
                console.log(string);

                juggleAsync()
            });
        });
    } else {
        return
    }
}

juggleAsync()