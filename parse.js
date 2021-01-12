const url = require('url')
const querystring = require('querystring')


module.exports = function parse(req, rsp) {
    const pathname = url.parse(req.url).pathname
    const params = req.url.split("?")[1]
    rsp.write("pathname: " + pathname + "\n")
    rsp.write("param1:" + querystring.parse(params)['foo'] + "\n")
    rsp.write("param2:" + querystring.parse(params)['hello'] + "\n")
}
