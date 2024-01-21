
const database = require('./database');

const patientDatabase = [
  { id: 1, lastName: 'Doe', firstName: 'John', age: 30, condition: 'Healthy' },
  { id: 2, lastName: 'Smith', firstName: 'Jane', age: 25, condition: 'Stable' },

];

function updatePatient(updatedPatient) {

  const index = patientDatabase.findIndex(patient => patient.id === updatedPatient.id);
  
  if (index !== -1) {
    patientDatabase[index] = { ...patientDatabase[index], ...updatedPatient };
    console.log('Patient updated:', patientDatabase[index]);
  } else {
    console.error('Patient not found for update');
  }
}

module.exports = {
  updatePatient,
  patientDatabase,
};