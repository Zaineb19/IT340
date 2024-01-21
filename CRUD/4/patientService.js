const Patient = require('./patient');
const PatientDAO = require('./patientDAO');
const database = require('./database');

class PatientService {
  static addPatient(lastName, firstName) {
    const patient = new Patient({
      id: database.patients.length + 1, 
      lastName,
      firstName,
      creationDate: new Date(),
    });

    PatientDAO.insertPatient(patient);
  }

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

module.exports = PatientService;
