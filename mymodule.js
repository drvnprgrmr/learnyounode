const fs = require("fs")

function filteredLs(dir, ext, callback) {

    fs.readdir(dir, (err, files) => {
        if (err) return callback(err);

        const data = []

        files.forEach((file) => {
            if (file.endsWith(`.${ext}`)) data.push(file);
        });

        callback(null, data)
    });
}


module.exports = filteredLs