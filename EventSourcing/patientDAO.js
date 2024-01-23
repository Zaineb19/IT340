// patientDAO.js
const database = require('./database');
const Patient = require('./patient');

class PatientDAO {
  static insertPatient(patient) {
    database.patients.push(patient);
  }

  static retrievePatient(id) {
    const patient = database.patients.find((patient) => patient.id === id);

    if (patient) {
      return new Patient({
        id: patient.id,
        lastName: patient.lastName,
        firstName: patient.firstName,
        creationDate: patient.creationDate,
      });
    }

    return null;
  }

  static updatePatient(updatedPatient) {
    const index = database.patients.findIndex(patient => patient.id === updatedPatient.id);

    if (index !== -1) {
      database.patients[index] = { ...database.patients[index], ...updatedPatient };
      console.log('Patient updated:', database.patients[index]);
    } else {
      console.error('Patient not found for update');
    }
  }
}

module.exports = PatientDAO;
