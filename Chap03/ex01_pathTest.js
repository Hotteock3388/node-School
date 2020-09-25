var path = require('path')
const { Z_PARTIAL_FLUSH } = require('zlib')

//경로관련 전역 변수
console.log(__dirname) // 디렉토리 경로
console.log(__filename) //파일 경로


//path 모듈 함수
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

var newPath = path.format({
    root: 'D:\\',
    dir: 'D:\\Study\\Projects\\node.js\\node-School\\Chap03',
    base: 'pathTest.js',
    ext: '.js',
    name: 'pathTest'
});

console.log(`newPath: ${newPath}`)

//path.join() 인자들을 조합하여 새로운 경로 String 생성
var createPath = path.join(__dirname, path.sep, '..', 'Chap02', path.sep, 'index.html');

console.log(`createPath: ${createPath}`)

