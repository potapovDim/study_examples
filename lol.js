const EventEmitter = require('events');
const util = require('util');



function MyEmitter() {
  EventEmitter.call(this)

  setImmediate(() => {() => this.emit('event')})
  // process.nextTick()
}
util.inherits(MyEmitter, EventEmitter)

const myEmitter = new MyEmitter();

myEmitter.on('event', function() {
  console.log('an event occurred!');
});

