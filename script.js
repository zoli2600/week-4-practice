const transactions = [
    {
        type: "deposit",
        amount: 20000
    },
    {
        type: "deposit",
        amount: 15000
    },
    {
        type: "withdrawal",
        amount: 8000
    },
    {
        type: "deposit",
        amount: 50000
    },
    {
        type: "withdrawal",
        amount: 12000
    },
    {
        type: "withdrawal",
        amount: 30000
    }
]

const largestTransaction = (transArr) => {
    return transArr.sort((a, b) => a.amount - b.amount) [transArr.length -1]
    /*VAGY 
    return transArr.sort((a, b) => b.amount - a.amount)[0]*/
}

largestTransaction(transactions)

const filterTransactions = (transArr, transType) => {
    return transArr.filter((transaction) => transaction.type === transType)
}

console.log(filterTransactions(transactions, "withdrawal"))