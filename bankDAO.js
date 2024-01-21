function retrieveBalance(accountId){
    console.log('RetrieveBalance', accountId);
    return 1000 ;
}
function debitAccount(accountId,amount){
    if (account.accountId === accountId) {
        if (account.balance >= amount) {
            account.balance -= amount;
        return true;

        }else{
            return false
        } 

    }else {
        return false;
    }
    }    
    


module.exports = {
    retrieveBalance,
    debitAccount

};