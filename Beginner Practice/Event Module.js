const EventEmitter = require('events');
//Register a listener
const MessageReceiver = require('./EventRaiser');
const receiver = new MessageReceiver();
//emitter.on('messageReceived', function(arg){ //The message has to be the same in order to be called.
    //console.log('Listener called');
//});

//Same registration using arrow function
receiver.on('messageReceived', (arg) => { //The message has to be the same in order to be called.
    console.log('Listener called');
});

receiver.message('message');
