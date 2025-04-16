const { sendJson } = require("../utils/response")
const { applyCors } = require("../utils/cors")
const { transactionPostController } = require("../controllers/transactionControllers")

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

    if(method == "POST" && url == "/transacao") {
        return transactionPostController(req, res)
    }
}


module.exports = {router}