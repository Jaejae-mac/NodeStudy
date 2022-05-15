//2022-05-15 SUN
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('test', (arg1, arg2, arg3) => {
  console.log("Success!");
  console.log(arg1);
  console.log(arg2);
});

myEmitter.emit('test','apple','banana','pear');

//객체 전달
const obj = {type:'text', data: 'Hello CodeIt',date: '2020-09-01'};
myEmitter.on('objTest', (info) => {
  console.log(info);
});

myEmitter.emit('objTest', obj);