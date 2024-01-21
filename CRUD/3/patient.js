const database = require('./database');

class Patient {
    constructor(id, lastName, firstName, creationDate) {
      this.id = id;
      this.lastName = lastName;
      this.firstName = firstName;
      this.creationDate = creationDate;
    }
  }
  
  module.exports = Patient;
  