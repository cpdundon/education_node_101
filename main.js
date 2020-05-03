const events = require ('events');
const eventEmitter = new events.EventEmitter();

const listner1 = () => {
	console.log('listner1 executed.');
}

const listner2 = () => {
	console.log('listner2 executed.');
}

eventEmitter.addListener('connection', listner1);
eventEmitter.addListener('connection', listner2);

let eLCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eLCount + " Listner(s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listner1);
console.log('Listener 1 Disconnected');

eventEmitter.emit('connection');

eLCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eLCount + " Listner(s) listening to connection event");

console.log('Program End.')
