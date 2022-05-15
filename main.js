// let m = require('./math-tools.js');

// console.log(m.add(3,5));
// console.log(m.PI);

// const fs = require('fs');

// let fileList = fs.readdirSync('.');
// console.log(fileList);

// fs.writeFileSync('new','Hello Node.js!');

// const os = require('os');

// console.log(os.cpus());

// const cowsay = require('cowsay');

// console.log(cowsay.say({
//   text: "I love javascript",
// }));

// const fs = require('fs');
// console.log('Start');
// let content = fs.readFileSync('./new', 'utf8');
// console.log(content);
// console.log('Finish');

// const fs = require('fs');

// console.log('Start');
// fs.readFile('./new','utf8',(error, data) => {
//   console.log(data);
// });

// console.log('Finish');

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('test', () => {
//   console.log('Succes!');
// });

// myEmitter.emit('test');

const http = require('http');

//00.http 객체의 createServer 메서드를 실행.
//let server = http.createServer();

var cnt = 0;
//01.서버에서 할 응답을 추가
let server = http.createServer(function (request,response){
  cnt++;
  console.log(cnt);
  response.end('<h1>Hello World</h1>');
}).listen(20030);

//클라이언트의 요청을 받아들일 준비를 함(포트:3000)
// server.listen(30001);
