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
  
  module.exports = {
    getBalance
  };