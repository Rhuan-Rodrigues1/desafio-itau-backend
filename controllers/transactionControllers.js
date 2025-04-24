const { createTransaction, deleteTransaction, getStatisticTransaction } = require("../services/transactionServices")
const { sendJson } = require("../utils/response")

function transactionPostController(req, res) {
    let body = ''
    req.on('data', chunck => body += chunck)

    req.on('end', () => {
        try {
            const data = JSON.parse(body)
            const transactions = createTransaction(data)
            sendJson(res, 201, transactions)
        } catch (error) {
            
                sendJson(res, 401, error)
        
        }
    })
}

function transactionDeleteController(req, res) {
    deleteTransaction()
    sendJson(res, 200, {message: "Todas as informações foram apagadas com sucesso"})
}

function transactionGetController(req, res) {
    const get = getStatisticTransaction()
    sendJson(res, 200, get)
}


module.exports = {transactionPostController, transactionDeleteController, transactionGetController}