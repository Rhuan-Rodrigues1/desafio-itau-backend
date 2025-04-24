let transactions = []


//Resolver problema de segurança, qualquer dado pode ser passado alem do valor.
function createTransaction(data) {

        if(data.valor >=0) {
          const transaction = {
            ...data,
            dataHora: new Date()
          }
        
          transactions.push(transaction)
          return transactions
        }

}

function deleteTransaction() {
  transactions.splice(0, transactions.length)
  return transactions
}


module.exports = {createTransaction, deleteTransaction}