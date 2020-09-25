var http = require('http')

var f = function(requeset, response){
    response.setHeader('content-type', 'text/html')
    response.end('<h1>공부하기시러요 <h1>')
}

var server = http.createServer(f)

server.listen(3000)
