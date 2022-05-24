const http = require('http');

const express = require('express');

// express로 만든 객체는 app이라는 변수이름을 주로 쓴다.
const app = express();

const users = ['Tom', 'Andy', 'Jessics', 'Paul'];

// let server = http.createServer((request,response) => {
//   if(request.url === '/'){
//     response.end('<h1>Welcome!</h1>');
//   }else if(request.url === '/users'){
//     response.end('<h1>'+users+'</h1>');
//   }else if(request.url.split('/')[1] === 'users'){
//     // url : /users/1 , /users/2
//     const userIdx = request.url.split('/')[2];
//     const userName = users[userIdx - 1];
//     response.end('<h1>${userName}</h1>');
//   }else{
//     response.end('<h1>Page Note Available</h1>');
//   }

// });

// server.listen(3001);
// app 객체의 get 메서드는특정 path 에 대하여 그 요청과 응답을 하나씩 처리하는 것.
app.get('/', (request, response) => {
  response.end(`<h1>Welcome!</h1>`);
});

app.get('/users', (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

// ':id' -> 이 위치에 오는 값을 id라는 속성에 담아라 라는 Express 의 표기법
// request.params : 요청이 만약 /users/1 이라고 왔다면
// request.params의 값은  {id : '1'} 이렇게 전달될 것이다.
// 따라서 id 속성의 값만 빼오기 위해 request객체의 param객체의 id 속성만 빼오기위해 아래와 같이 사용하는 것.
// :id <- request.params.id
app.get('/users/:id', (request, response) => {
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
  response.end(`<h1>Page Note Available</h1>`);
});

app.listen(3001);