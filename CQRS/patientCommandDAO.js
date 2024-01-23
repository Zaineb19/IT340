const Patient = require('./patient');
const database = require('./database');
const PatientDAO = require('./patientDAO');

class PatientCommande {
    static addPatient(lastName, firstName) {
        const id = database.patients.length + 1;
        const patient = new Patient({
            id,
            lastName,
            firstName,
            creationDate: new Date(),
        });
        console.log(patient);
    }

    static savePatient(id, lastName, firstName) {
        const existingPatient = PatientDAO.patientDatabase.find(patient => patient.id === id);

        if (existingPatient) {
            const updatedPatient = { ...existingPatient, lastName, firstName };
            PatientDAO.updatePatient(updatedPatient);
        } else {
            console.error('Patient not found for save');
        }
    }
}

module.exports = PatientCommande;
