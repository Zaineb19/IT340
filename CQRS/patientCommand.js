const Patient = require('./patient');
const database = require('./database');
const { patientCache } = require('./cache');
const PatientDAO = require('./patientDAO');

class PatientCommand {
  static addPatient(lastName, firstName) {
    const id = database.patients.length + 1;
    const patient = new Patient({
      id,
      lastName,
      firstName,
      creationDate: new Date(),
    });

    patientCache[id] = {
      id: patient.id,
      lastName: patient.lastName,
      firstName: patient.firstName,
      creationDate: patient.creationDate,
      name: `${patient.firstName} ${patient.lastName}`,
    };

    console.log(patient);
  }

  static savePatient(id, lastName, firstName) {
    const existingPatient = PatientDAO.retrievePatient(id);

    if (existingPatient) {
      patientCache[id] = {
        ...existingPatient,
        lastName,
        firstName,
        name: `${firstName} ${lastName}`,
      };

      PatientDAO.updatePatient({
        ...existingPatient,
        lastName,
        firstName,
      });
    } else {
      console.error('Patient not found for save');
    }
  }
}

module.exports = PatientCommand;
