const { sendJson } = require("../utils/response")
const {applyCors} = require("../utils/cors")

function router(req, res) {
    const { method, url } = req

    applyCors(res)

    if(method == "OPTIONS"){
        res.writeHead(204)
        res.end()
        return
    }

    if(method == "GET" && url == "/") {
        return sendJson(res, 200, {message: "OK"})
    }
}


module.exports = {router}