let account = {
    balance: 1000, 
    accountNumber: '123456'
  };
    const bankDAO = require('./bankDAO');
    function getBalance(accountId) {
    //return `Le solde du compte ${account.accountNumber} est de ${account.balance} dollars.`;
    const balance = bankDAO.retrieveBalance(accountId);
    return balance
  }
    function transferMoney (accountId, amount) {
      /*if (amount > 0 && account.balance >= amount) {
        account.balance -= amount
        return getBalance(accountId)
      }else{
        return null
      }*/
      return new Promise((resolve, reject) => {
        const success = bankDAO.debitAccount(accountId, amount);
        if (success) {
            resolve(getBalance(accountId));
        } else {
            reject(new Error('Transfer failed')); 
        }
    });
}

    
  module.exports = {
    getBalance,
    transferMoney
  };