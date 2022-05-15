const http = require('http');

//00.http 객체의 createServer 메서드를 실행.
//let server = http.createServer();

var cnt = 0;
//01.서버에서 할 응답을 추가
let server = http.createServer(function (request,response){
  cnt++;
  console.log(cnt);
  response.end('<h1>Hello World</h1>');
});

//클라이언트의 요청을 받아들일 준비를 함(포트:3000)
server.listen(3001);



