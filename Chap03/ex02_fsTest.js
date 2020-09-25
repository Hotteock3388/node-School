var fs = require('fs');


// 1. 동기식 파일 읽기
var data = fs.readFileSync('./readme.txt');
console.log('동기식 파일 읽기\n', data);

