const url = require('url')

function route(req,rsp) {
    const pathname = url.parse(req.url).pathname

    switch (pathname) {
        case '/aaa':
            rsp.write("route match : /aaa \n")
            break;
        case '/bbb':
            rsp.write("route match path: /bbb \n")
            break;
        default:
            rsp.write("route did not match any path")
    }
}

module.exports.route = route
