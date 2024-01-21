const bankDAO = require('./bankDAO.js');
const bank = require('./bank.js');
const bankTransfer = require('./bankTransfer.js');

jest.mock('./bankDAO.js', () => ({
  retrieveBalance: jest.fn(),
  debitAccount: jest.fn(),
}));
jest.mock('./bankTransfer.js', () => ({
  transfer: jest.fn(),
}));


describe('Bank Tests', () => {
  it('Test1', () => {
    
    bank.getBalance('123456');
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith('123456');
    expect(bankDAO.retrieveBalance).toHaveBeenCalledTimes(1);
  });
  it('Test2', () => {
    const accountId = '789012';
    bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledTimes(2); 
  });
  it('Test3', () => {
    const accountId = '123456';
    const expectedBalance = 1000; 
    bankDAO.retrieveBalance.mockReturnValue(expectedBalance);
    const actualBalance = bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
    expect(actualBalance).toEqual(expectedBalance);
  });
  it('Test1exo3', () => {
    const accountId = '123456';
    const amount = 100;
    bankTransfer.transfer(accountId, amount);
    expect(bankTransfer.transfer).toHaveBeenCalledWith(accountId, amount);
  });
  it('Test2exo3', () => {
    const accountId = '123456';
    const amount = 100;
    bank.transferMoney(accountId, amount);
    expect(bankDAO.debitAccount).toHaveBeenCalledWith(accountId, amount);
    expect(bankDAO.debitAccount).toHaveBeenCalledTimes(1);
});
it('Test3exo3', async () => {
  const accountId = '123456';
  const amount = 200;
  await expect(bank.transferMoney(accountId, amount)).rejects.toThrow('Transfer failed');
  expect(bankDAO.debitAccount).not.toHaveBeenCalled();
});
});






    





