const bank = require ('./bank');
function transfer (accountId,amount){
    if (amount > 0){
        const updatedBalance = bank.transferMoney(accountId,amount);
        if (updatedBalance!==null){
            bank.transfer(accountId,amount);
            return updatedBalance;
        }else{
            return null;
        }
    } 
    else{
        return null ;
    }
}

module.exports={
    transfer
};