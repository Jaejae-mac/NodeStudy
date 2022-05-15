const http = require('http');

const users = ['Tom', 'Andy', 'Jessics', 'Paul'];

let server = http.createServer((request,response) => {
  if(request.url === '/'){
    response.end('<h1>Welcome!</h1>');
  }else if(request.url === '/users'){
    response.end('<h1>'+users+'</h1>');
  }else if(request.url.split('/')[1] === 'users'){
    // url : /users/1 , /users/2
    const userIdx = request.url.split('/')[2];
    const userName = users[userIdx - 1];
    response.end('<h1>${userName}</h1>');
  }else{
    response.end('<h1>Page Note Available</h1>');
  }

});

server.listen(3001);