
const Patient = require('./patient');
const patientDAO = require('./patientDAO');

function addPatient(id, lastName, firstName) {
    const newPatient = new Patient(id, lastName, firstName, null);
    patientDAO.insertPatient(newPatient);
}

function getPatientList() {
    const patientList = patientDAO.retrievePatientList();
    return patientList;
}

module.exports = {
    addPatient: addPatient,
    getPatientList: getPatientList
};
