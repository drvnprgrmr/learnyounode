const fs = require("fs")

const [path, ext] = process.argv.slice(2)

fs.readdir(path, (err, files) => {
    if (err) return err

    files.forEach( file => {
        if (file.endsWith(`.${ext}`)) console.log(file)
    })
})