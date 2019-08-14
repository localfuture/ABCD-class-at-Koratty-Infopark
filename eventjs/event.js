var EventEmitter = require('events');//class
var emitter = new EventEmitter();//object

//listner
emitter.on('doorOpen', (name) => {
console.log(name + " is waiting outside...");
});

emitter.on('doorOpen',(name)=>{
    console.log("Dear "+name+" , Please wait outside for a moment.")
});


//emitter
emitter.emit('doorOpen','Anoop');