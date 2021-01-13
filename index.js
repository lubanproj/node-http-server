const server = require('./server')
const router = require('./router')

server.serve(router.route)
