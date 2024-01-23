const database = require('./database');
const Patient = require('./patient');
const { eventList } = require('./eventStore');

class PatientQueryDAO {
  static insertPatient(patient) {
    database.patients.push(patient);
    console.log('Patient inserted:', patient);
  }

  static restorePatient(id) {
    const patientEvents = eventList.filter((event) => event.name === 'patientAdded' && event.patientId === id);

    if (patientEvents.length > 0) {
      // Reconstruction de l'entité patient à partir des événements
      const patient = patientEvents.reduce((acc, event) => event.payload, {});
      return new Patient(patient);
    }

    return null;
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
}

module.exports = PatientQueryDAO;
