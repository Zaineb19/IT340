const patientDAO = require('./patientDAO');

function savePatient(id, lastName, firstName) {
  const existingPatient = patientDAO.patientDatabase.find(patient => patient.id === id);

  if (existingPatient) {
    const updatedPatient = { ...existingPatient, lastName, firstName };
    patientDAO.updatePatient(updatedPatient);
  } else {
    console.error('Patient not found for save');
  }
}

module.exports = {
  savePatient,
};
