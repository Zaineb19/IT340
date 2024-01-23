const Patient = require('./patient');
const database = require('./database');
const { patientCache } = require('./cache');
const PatientDAO = require('./patientDAO');
const { addEvent } = require('./eventStore');

class PatientCommand {
  static addPatient(lastName, firstName) {
    const id = database.patients.length + 1;
    const patient = new Patient({
      id,
      lastName,
      firstName,
      creationDate: new Date(),
    });

    addEvent('patientAdded', id, patient);
    console.log(patient);
  }


  static savePatient(id, lastName, firstName) {
    const existingPatient = PatientDAO.retrievePatient(id);

    if (existingPatient) {
      addEvent('patientSaved', id, {
        id,
        lastName,
        firstName,
        creationDate: existingPatient.creationDate,
      });

      // ... (supprimer l'appel à la fonction updatePatient)
    } else {
      console.error('Patient not found for save');
    }
  }
}

module.exports = PatientCommand;
