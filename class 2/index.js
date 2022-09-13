// import helper from "./helper.js";

// function callFunction() {
//     helper();
//     console.log("index.js ")
// }

// callFunction();



// const EventEmitter = require('events');
// const eventEmitterObject = new EventEmitter();

const { registerEvent, eventEmitterObject } = require('./greeting');
const { readFullFile, readFileInParts } = require('./streams');
const { createFile, updateFile, deleteFile } = require('./fileCurd');

registerEvent('newEvent');
eventEmitterObject.emit('newEvent');

// readFullFile();
// readFileInParts();

createFile();
// updateFile('\t This is new Data updated');
// deleteFile();