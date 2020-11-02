var http = require('http');
var fs = require('fs');

//#region 1. http server 구동 방식 1
var server = http.createServer();

// 'request' 이벤트: 클라이언트의 요청이있을 때마다 발생
// 연결 당 여러 요청이있을 수 있다 (HTTP Keep-Alive 연결의 경우).
server.on('request', function(request, response){
  response.write('<h1>Wecome');
  response.end(' to my server</h1>');
}); 

server.on('listening', function(){
  console.log('8080 포트에서 대기중');
});

server.listen(8080);
//#endregion