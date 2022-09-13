const fs = require('fs');

function readFullFile() {
    const start = Date.now();
    fs.readFile('info.txt', 'utf8',(err, data) => {
        console.log('time taken ', (Date.now() - start))
        // console.log('Here is output = ', data);
        // console.log('time taken ', (Date.now() - start) / 1000)
    });
}

function readFileInParts() {
    const stream = fs.createReadStream('info.txt', 'utf-8');
    stream.on('data', (partialInfo) => {
        // console.log(partialInfo);
        console.log(partialInfo.length);
    })

    stream.on('end', () => {
        console.log("read successfully");
    })

    stream.on('error', (err) => {
        console.log("Error Occurred - ", err);
    })
}

module.exports = {readFullFile, readFileInParts};