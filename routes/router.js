function sendJson(res, statusCode, data) {
    res.writeHead(statusCode, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(data))
}


function router(req, res) {
    const { method, url } = req

    if(method == "GET" && url == "/") {
        return sendJson(res, 200, {message: "OK"})
    }
}


module.exports = {router}