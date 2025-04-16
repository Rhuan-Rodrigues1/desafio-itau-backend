let transactions = []


//Resolver problema de segurança, qualquer dado pode ser passado alem do valor.
function createTransaction(data) {

        if(data.valor >=0) {
          const transaction = {
            ...data,
            dataHora: new Date()
          }
        
          transactions.push(transaction)
          return transaction
        }

}


module.exports = {createTransaction}