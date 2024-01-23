const database = require('./database');
const PatientDAO = require('./patientQueryDAO'); 
class PatientQuery {
  static getPatient(id) {
    const retrievedPatient = PatientDAO.retrievePatient(id); 

    if (retrievedPatient) {
      return {
        id: retrievedPatient.id,
        lastName: retrievedPatient.lastName,
        firstName: retrievedPatient.firstName,
        creationDate: retrievedPatient.creationDate,
      };
    }

    return null;
  }
 
  
}

module.exports = PatientQuery;
