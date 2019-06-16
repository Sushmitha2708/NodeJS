var events= require('events');
var emitter = new events.EventEmitter();
emitter.on('newEvent', (message)=>{
	console.log("message:"+ message);
});
emitter.emit('newEvent', "hi this is sushmitha");