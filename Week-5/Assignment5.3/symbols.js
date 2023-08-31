let transactionCounter = 1;

function generateTransactionId() {
  return Symbol(`TRANSACTION_ID_${transactionCounter++}`);
}

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);

/*  
Output :
Symbol(TRANSACTION_ID_1)
Symbol(TRANSACTION_ID_2)
Symbol(TRANSACTION_ID_3)

*/
