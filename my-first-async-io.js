const fs = require("fs");

const path = process.argv[2];

fs.readFile(path, (err, buff) => {
    if (err) console.log(err)
    const numNewLines = buff.toString().split("\n").length - 1;
    console.log(numNewLines);

});
