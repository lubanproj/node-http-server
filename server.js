const http = require('http')
const parse = require('./parse')


function serve(route) {
    const server = http.createServer(function(req, rsp) {
        // write http headers
        rsp.writeHead(200, {'Content-Type': 'text-plain'})
        // parse params
        parse(req, rsp)
        // parse route
        route(req, rsp)

        rsp.end('hello world')
    })

    server.listen(8888)
    console.log('server is running on http://127.0.0.1:8888')
}

module.exports.serve = serve

