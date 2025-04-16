const { createTransaction } = require("../services/transactionServices")
const { sendJson } = require("../utils/response")

function transactionPostController(req, res) {
    let body = ''
    req.on('data', chunck => body += chunck)

    req.on('end', () => {
        try {
            const data = JSON.parse(body)
            createTransaction(data)
            sendJson(res, 201)
        } catch (error) {
            
                sendJson(res, 401, error)
        
        }
    })
}


module.exports = {transactionPostController}