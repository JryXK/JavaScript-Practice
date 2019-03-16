const EventEmitter = require('events');

class MessageReceiver extends EventEmitter{
    message(message){
        //Raise an event
        this.emit('messageReceived', {id: 1, url: 'https://'}); // Signaling an event has happened.

        console.log(message);
    }
}

module.exports = MessageReceiver; 