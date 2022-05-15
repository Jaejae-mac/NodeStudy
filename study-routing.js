const http = require('http');

users = ['Tom', 'Andy', 'Jessics', 'Paul'];

let server = http.createServer(function (request,response){
  // response.end('<h1>Hello World</h1>');
  //클라이언트가 요청한 정보는 request 객체에 담겨 있다.
  // console.log(request.url);

  if(request.url === '/'){
    response.end('<h1>Welcome!</h1>');
  }else if(request.url === '/users'){
    response.end('<h1>'+users+'</h1>');
  }else if(request.url.split('/')[1] === 'users'){
    //url : /users/1 , /users/2
    let userIdx = request.url.split('/')[2];
    let userName = users[userIdx - 1];
    response.end('<h1>'+userName+'</h1>');
  }else{
    response.end('<h1>Page Note Available</h1>');
  }

});

server.listen(3001);