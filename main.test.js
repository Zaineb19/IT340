const bankDAO = require('./bankDAO.js');
const bank = require('./bank.js');

jest.mock('./bankDAO.js', () => ({
  retrieveBalance: jest.fn(),
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
    expect(bankDAO.retrieveBalance).toHaveBeenCalledTimes(2); // Assurez-vous d'ajuster le nombre d'appels si nécessaire
  });
  it('Test3', () => {
    const accountId = '123456';
    const expectedBalance = 1000; 
    bankDAO.retrieveBalance.mockReturnValue(expectedBalance);
    const actualBalance = bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
    expect(actualBalance).toEqual(expectedBalance);
  });
});



