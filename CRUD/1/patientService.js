const Patient = require('./patient');
const patientDAO = require('./patientDAO');
const database = require('./database');
function addPatient(lastName, firstName) {
  const id = database.patients.length + 1; 
  const creationDate = new Date();
  const newPatient = new Patient(id, lastName, firstName, creationDate);
  patientDAO.insertPatient(newPatient);
}

module.exports = { addPatient };
