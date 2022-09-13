// Event Emitter
const EventEmitter = require('events');
const eventEmitterObject = new EventEmitter();

function registerEvent(eventName) {
    console.log('registering', eventName);
    eventEmitterObject.on(eventName, () => {
        console.log(eventName, ' is triggred');
    })
}

module.exports = { registerEvent, eventEmitterObject };



// Event Emitter
// const EventEmitter = require('events');
// const eventEmitterObject = new EventEmitter();

// eventEmitterObject.on('greeting', () => {
//     console.log('hello, you are triggreed');
//     eventEmitterObject.emit("greeting2");
// })

// eventEmitterObject.on("greeting2", () => {
//     console.log("nested greeting triggred")
// })

// eventEmitterObject.emit('greeting');