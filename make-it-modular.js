const filteredLs = require("./mymodule")

const [path, ext] = process.argv.slice(2)

filteredLs(path, ext, (err, data) => {
    if (err) console.log(err)

    data.forEach(file => {
        console.log(file)
    });
})