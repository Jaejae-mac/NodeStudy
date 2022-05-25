//nodemon 설치를 통한 서버 리부팅 없이 코드를 실행시키기
/*
  노드몬 패키지를 '-g' 명령어를 통해 글로벌(전역설치)설치 하겠다는 얘기.
  > npm install -g nodemon
*/
const http = require('http');

const express = require('express');

const app = express();

const users = ['Tom', 'Andy', 'Jessics', 'Paul','Codeit','Sally','Michel'];

app.get('/', (request, response) => {
  response.end(`<h1>Welcome!</h1>`);
});

app.get('/users', (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
  response.end(`<h1>Page Note Available</h1>`);
});

app.listen(3001);