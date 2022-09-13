const fs = require('fs');

const pathOfnewFile = __dirname + '/curd.txt';

function createFile() {
    fs.writeFileSync(pathOfnewFile, 'This is initial msg');
}

function updateFile(data) {
    fs.appendFile(pathOfnewFile, data, (err) => {
        if(err) console.log("Error Occurred ", err);
        else console.log("updated Successfully");
    })
}

function deleteFile() {
    fs.unlinkSync(pathOfnewFile);
    console.log('file deleted');
}

module.exports = {createFile, updateFile, deleteFile}