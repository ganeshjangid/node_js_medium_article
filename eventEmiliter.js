const EventEmitter=require('events');

const myEmitter=new EventEmitter();

myEmitter.on('myevent',()=>console.log('handler1: myevent was fired!'));
myEmitter.on('myevent', () => console.log('handler2: myevent was fired!'));
myEmitter.on('myevent', () => console.log('handler3: myevent was fired!'));

myEmitter.emit('myevent');
console.log('I am the last log line');

// IT is behaviour synchronously