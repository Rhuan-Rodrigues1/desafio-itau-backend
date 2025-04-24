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

function getStatisticTransaction() {
  const now = new Date()
  const limit = now - 60 * 1000
  const arrayFiltred = transactions.filter(data => data.dataHora >= limit)

  let statistics = {}

  if(arrayFiltred == []) {
    statistics = {
      count: 0,
      sum: 0,
      avg: 0,
      min: 0,
      max: 0
    }  
  } else {
    statistics = {
      count: arrayFiltred.length,
      sum: arrayFiltred.reduce((acc, i)  => i.valor + acc, 0),
      avg: (arrayFiltred.reduce((acc, i)  => i.valor + acc, 0) ) / arrayFiltred.length,
      min: arrayFiltred.reduce((min, i)  => Math.min(min, i.valor), +Infinity),
      max: arrayFiltred.reduce((max, i)  => Math.max(max, i.valor), -Infinity)
    }
  }


 return statistics
}

module.exports = {createTransaction, deleteTransaction, getStatisticTransaction}